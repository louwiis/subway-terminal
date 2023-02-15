import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Command from './Command'
import CommandProductIngredient from './CommandProductIngredient'

export default class CommandProduct extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public commandId: number

  @belongsTo(() => Command)
  public command: BelongsTo<typeof Command>

  @column()
  public name: string

  @column()
  public price: number

  @hasMany(() => CommandProductIngredient, {
    foreignKey: 'commandProductId',
  })
  public ingredients: HasMany<typeof CommandProductIngredient>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
