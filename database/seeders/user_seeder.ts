import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
export default class extends BaseSeeder {
  async run() {
    await User.updateOrCreateMany('email', [
      {
        fullName: 'Jefte Amorim da Costa',
        email: 'jefteamorim@gmail.com',
        password: 'E@sy1234',
      },
    ])
  }
}
