import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ingredient from 'App/Models/Ingredient'
import Product from 'App/Models/Product'
import ProductIngredient from 'App/Models/ProductIngredient'
import Ws from 'App/Services/Ws'

async function sendCatalog () {
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
}

export default class ProductsController {
  public async destroy ({ params, response, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const product = await Product.findOrFail(params.id)

    if (user.role !== 1) {
      return response.unauthorized()
    }

    await product.delete()

    await sendCatalog()

    return response.json(product)
  }

  public async update ({ params, request, response, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    if (user.role !== 1) {
      return response.unauthorized()
    }

    const product = await Product.findOrFail(params.id)

    product.name = request.input('name')
    product.price = request.input('price')
    product.foodType = request.input('foodType')
    product.isBase = request.input('isBase')
    product.isEditable = request.input('isEditable')
    product.imageUrl = request.input('imageUrl')
    product.quantity = request.input('quantity')

    await product.save()

    const ingredients = request.input('ingredients')

    for (const ingredient of ingredients) {
      const productIngredient = await ProductIngredient.query()
        .where('product_id', product.id)
        .where('ingredient_id', ingredient.id)
        .first()


      if (productIngredient) {
        productIngredient.quantity = ingredient.quantity
        await productIngredient.save()
      }
      else {
        console.log('create')
        await ProductIngredient.create({
          productId: product.id,
          ingredientId: ingredient.id,
          quantity: ingredient.quantity,
        })
      }
    }

    await sendCatalog()

    return response.json(product)
  }

  public async store ({ request, response, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    if (user.role !== 1) {
      return response.unauthorized()
    }

    const product = await Product.create({
      name: request.input('name'),
      price: request.input('price'),
      foodType: request.input('foodType'),
      isBase: request.input('isBase'),
      isEditable: request.input('isEditable'),
      imageUrl: request.input('imageUrl'),
      quantity: request.input('quantity'),
    })

    const ingredients = request.input('ingredients')

    for (const ingredient of ingredients) {
      await ProductIngredient.create({
        productId: product.id,
        ingredientId: ingredient.id,
        quantity: ingredient.quantity,
      })
    }

    await sendCatalog()

    return response.json(product)
  }
}
