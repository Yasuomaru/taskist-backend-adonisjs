import Task from 'App/Models/Task'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Task, ({ faker }) => {
  return {
    title: faker.hacker.adjective() ,
    isCompleted: false
  }
}).build()
