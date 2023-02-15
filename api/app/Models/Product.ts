import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Ingredient from './Ingredient'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public price: number

  @column()
  public isEditable: boolean = true

  @column()
  public type: string | null

  @column()
  public imageUrl: string

  @column()
  public foodType: string

  @column()
  public isBase: boolean = false

  @column()
  public quantity: number | null

  @manyToMany(() => Ingredient, {
    pivotTable: 'product_ingredients',
    pivotColumns: ['quantity'],
  })
  public ingredients: ManyToMany<typeof Ingredient>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
