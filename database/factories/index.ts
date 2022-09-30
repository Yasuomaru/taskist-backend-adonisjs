import Factory from '@ioc:Adonis/Lucid/Factory'
import TaskFactory from './TaskFactory'

// const users = await TaskFactory.createMany(10)
TaskFactory.createMany(10).then(d => console.log(d))
