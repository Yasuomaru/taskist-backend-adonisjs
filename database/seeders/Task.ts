import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TaskFactory from '../factories/TaskFactory'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await TaskFactory.createMany(10)
  }
}
