import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name').notNullable()
      table.float('price').notNullable()
      table.boolean('is_editable').notNullable().defaultTo(true)
      table.string('image_url').notNullable()
      table.string('food_type').notNullable()
      table.boolean('is_base').notNullable().defaultTo(false)
      table.integer('quantity').unsigned().nullable()
      table.string('type').nullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
