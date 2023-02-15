import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreCommandValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */


  public schema = schema.create({
    products: schema.array().members(
      schema.object().members({
        id: schema.number(),
        food_type: schema.string(),
        name: schema.string(),
        price: schema.number(),
        ingredients: schema.array().members(
          schema.object().members({
            id: schema.number(),
            name: schema.string(),
            price: schema.number(),
            quantity: schema.number(),
          })
        ),
        addedIngredients: schema.array().members(
          schema.object().members({
            id: schema.number(),
            name: schema.string(),
            price: schema.number(),
            quantity: schema.number(),
          })
        ),
        removedIngredients: schema.array().members(
          schema.object().members({
            id: schema.number(),
            name: schema.string(),
            price: schema.number(),
            quantity: schema.number(),
          })
        ),
      })
    )
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {}
}
