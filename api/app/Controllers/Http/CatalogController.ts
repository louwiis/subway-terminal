import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ingredient from 'App/Models/Ingredient'
import Product from 'App/Models/Product'
import ProductIngredient from 'App/Models/ProductIngredient'

export default class CatalogController {

  public async index ({ response }: HttpContextContract) {
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

    return response.json({
      sandwiches: products.filter(product => product.foodType === 'sandwich'),
      drinks: products.filter(product => product.foodType === 'drink'),
      desserts: products.filter(product => product.foodType === 'dessert'),
      ingredients
    })
  }
}
