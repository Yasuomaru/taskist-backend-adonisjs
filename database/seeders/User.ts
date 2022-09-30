import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    const baseUser = new User()
    baseUser.email = "admin@mail.com"
    baseUser.password = "secret"

    await baseUser.save()
  }
}
