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

export default class IngredientsController {
  public async destroy ({ params, response, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const ingredient = await Ingredient.findOrFail(params.id)

    if (user.role !== 1) {
      return response.unauthorized()
    }

    await ingredient.delete()

    await sendCatalog()

    return response.noContent()
  }

  public async update ({ params, request, response, auth }: HttpContextContract) {
    const user = await auth.authenticate()

    if (user.role !== 1) {
      return response.unauthorized()
    }

    const ingredient = await Ingredient.findOrFail(params.id)

    ingredient.name = request.input('name')
    ingredient.quantity = request.input('quantity')

    await ingredient.save()

    await sendCatalog()

    return response.json(ingredient)
  }

  public async store ({ request, response, auth }: HttpContextContract) {
    const user = await auth.authenticate()

    console.log(user)
    if (user.role !== 1) {
      return response.unauthorized()
    }

    const ingredient = await Ingredient.create({
      name: request.input('name'),
      quantity: request.input('quantity'),
      type: request.input('type'),
      imageUrl: request.input('imageUrl'),
      price: request.input('price'),
    })

    await sendCatalog()

    return response.json(ingredient)
  }
}
