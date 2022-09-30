import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'

export default class TasksController {
  public async index(ctx: HttpContextContract){
    const tasks = await Task.all()
    const tasksJSON = tasks.map((task) => task.serialize())
    return tasksJSON
  }

  public async store(ctx: HttpContextContract){
    const body = JSON.parse(ctx.request.body())
    const newTask = new Task()
    console.log(body)
    newTask.task = body.task
    newTask.isCompleted = body.is_completed

    await newTask.save()
    ctx.response.json(newTask.serialize())
  }
}
