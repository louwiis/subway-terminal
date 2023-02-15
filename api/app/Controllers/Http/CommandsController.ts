import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import StoreCommandValidator from 'App/Validators/Command/StoreCommandValidator'
import Command from 'App/Models/Command'
import Product from 'App/Models/Product'
import Ingredient from 'App/Models/Ingredient'
import CommandProduct from 'App/Models/CommandProduct'
import ProductIngredient from 'App/Models/ProductIngredient'
import Ws from 'App/Services/Ws'

export default class CommandsController {
  public async index ({ response, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    if (user.role !== 1) {
      return response.status(403).json({
        message: 'You are not allowed to access this route',
      })
    }

    const commands = await Command.query().preload('products', (query) => {
      query.preload('ingredients')
    }).orderBy('id', 'desc')

    return response.json(commands)
  }

  public async pendingIndex ({ response }: HttpContextContract) {
    const commands = await Command.query().preload('products', (query) => {
      query.preload('ingredients')
    }).where('status', 1).orderBy('id', 'asc')

    return response.json(commands)
  }

  public async store ({ request, auth, response }: HttpContextContract) {
    const user = await auth.authenticate()
    const data = await request.validate(StoreCommandValidator)

    if (data.products.length === 0) {
      return response.status(400).json({
        message: 'You must add at least one product to your command',
      })
    }

    const command = new Command()

    let price = 0;

    for (const product of data.products) {
      const productFromDatabase = await Product.findOrFail(product.id)

      price += productFromDatabase.price

      for (const ingredient of product.addedIngredients) {
        const ingredientFromDatabase = await Ingredient.findOrFail(ingredient.id)

        price += ingredientFromDatabase.price * ingredient.quantity
      }
    }

    command.price = price
    command.status = 1
    command.userId = user.id

    await command.save()

    for (const product of data.products) {
      const productFromDatabase = await Product.findOrFail(product.id)

      const commandProduct = new CommandProduct()
      commandProduct.commandId = command.id
      commandProduct.name = productFromDatabase.name
      commandProduct.price = productFromDatabase.price

      if (product.food_type !== 'sandwich') {
        if (productFromDatabase.quantity) {
          productFromDatabase.quantity -= 1
        }

        await productFromDatabase.save()
      }

      await commandProduct.save()

      for (const ingredient of product.addedIngredients) {
        const ingredientFromDatabase = await Ingredient.findOrFail(ingredient.id)

        await commandProduct.related('ingredients').create({
          name: ingredientFromDatabase.name,
          price: ingredientFromDatabase.price,
          quantity: ingredient.quantity,
        })

        ingredientFromDatabase.quantity -= ingredient.quantity
        await ingredientFromDatabase.save()

        commandProduct.price += ingredientFromDatabase.price * ingredient.quantity

        await commandProduct.save()
      }

      for (const ingredient of product.removedIngredients) {
        product.ingredients = product.ingredients.filter((commandProductIngredient) => {
          if (commandProductIngredient.quantity > ingredient.quantity && commandProductIngredient.id === ingredient.id) {
            commandProductIngredient.quantity -= ingredient.quantity
            return true
          } else {
            return commandProductIngredient.id !== ingredient.id
          }
        })
      }

      for (const ingredient of product.ingredients) {
        const ingredientFromDatabase = await Ingredient.findOrFail(ingredient.id)

        await commandProduct.related('ingredients').create({
          name: ingredientFromDatabase.name,
          price: ingredientFromDatabase.price,
          quantity: ingredient.quantity,
        })

        ingredientFromDatabase.quantity -= ingredient.quantity
        await ingredientFromDatabase.save()
      }
    }

    const products = await Product.query().preload('ingredients').orderBy('id', 'asc')

    for (const product of products) {
      if (product.foodType === 'sandwich') {
        for (const productIngredient of product.ingredients) {
          const neededQuantity = await ProductIngredient.query()
            .where('product_id', product.id)
            .where('ingredient_id', productIngredient.id)
            .firstOrFail()

          productIngredient.quantity = neededQuantity.quantity
        }
      }
    }

    const ingredients = await Ingredient.query().orderBy('id', 'asc')

    Ws.io.emit('catalog', {
      sandwiches: products.filter(product => product.foodType === 'sandwich'),
      drinks: products.filter(product => product.foodType === 'drink'),
      desserts: products.filter(product => product.foodType === 'dessert'),
      ingredients,
    })

    Ws.io.emit('pending-commands', await Command.query().preload('products', (query) => {
      query.preload('ingredients')
    }).where('status', 1).orderBy('id', 'asc'))

    Ws.io.emit('commands', await Command.query().preload('products', (query) => {
      query.preload('ingredients')
    }).orderBy('id', 'desc'))


    return response.json(data)
  }

  public async validate ({ params, auth, response }: HttpContextContract) {
    if (auth.user?.role === 3) {
      return response.status(403).json({
        message: 'You are not allowed to validate commands',
      })
    }

    const command = await Command.find(params.id)

    if (!command) {
      return response.status(404).json({
        message: 'Command not found',
      })
    }

    command.status = 2
    await command.save()

    Ws.io.emit('commands', await Command.query().preload('products', (query) => {
      query.preload('ingredients')
    }).orderBy('id', 'desc'))

    Ws.io.emit('pending-commands', await Command.query().preload('products', (query) => {
      query.preload('ingredients')
    }).where('status', 1).orderBy('id', 'asc'))

    return response.json(command)
  }

  public async adminIndex ({ response, auth }: HttpContextContract) {
    if (auth.user?.role !== 1) {
      return response.status(403).json({
        message: 'You are not allowed to validate commands',
      })
    }

    const commands = await Command.query().preload('products', (query) => {
      query.preload('ingredients')
    }).orderBy('id', 'asc')

    return response.json(commands)
  }
}
