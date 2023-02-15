import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import CommandProduct from './CommandProduct'

export default class Command extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public price: number

  @column()
  // 1 = paid, 2 = in progress, 3 = delivered
  public status: number

  @column()
  public userId = 1

  @hasMany(() => CommandProduct, {
    foreignKey: 'commandId',
  })
  public products: HasMany<typeof CommandProduct>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
