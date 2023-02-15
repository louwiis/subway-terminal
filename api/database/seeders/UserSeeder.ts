import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        email: 'dev.louwis@gmail.com',
        name: 'Admin',
        code: 1,
        role: 1,
      },
      {
        name: 'Cuisine',
        code: 2,
        role: 2,
      },
      {
        name: 'Terminal 1',
        code: 3,
        role: 3,
      },
      {
        name: 'Terminal 2',
        code: 4,
        role: 3,
      },
      {
        name: 'Terminal 3',
        code: 5,
        role: 3,
      },
    ])
  }
}
