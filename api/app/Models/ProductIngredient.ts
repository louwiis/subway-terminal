import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Ingredient from './Ingredient'
import CommandProduct from './CommandProduct'


export default class ProductIngredient extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public productId: number

  @belongsTo(() => CommandProduct)
  public product: BelongsTo<typeof CommandProduct>

  @column()
  public ingredientId: number

  @belongsTo(() => Ingredient)
  public ingredient: BelongsTo<typeof Ingredient>

  @column()
  public quantity: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
