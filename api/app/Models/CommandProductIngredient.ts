import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import CommandProduct from './CommandProduct'

export default class CommandProductIngredient extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public commandProductId: number

  @belongsTo(() => CommandProduct, {
    foreignKey: 'commandProductId',
  })
  public commandProduct: BelongsTo<typeof CommandProduct>

  @column()
  public name: string

  @column()
  public quantity: number

  @column()
  // it is the price of the ingredient for one unit
  public price: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
