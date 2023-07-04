import Task from '../../models/Task';

//api controller for tasks
export default class TasksController {
  //get all tasks
  public async index() {
    const tasks = await Task.all()
    return tasks
  }

  //create new task
  public async store({ request }) {
    const data = request.only(['title', 'isCompleted'])

    //validate data
    if (!data.title || data.isCompleted.IsNullOrEmpty )
      return { message: 'Invalid data' }

    //title must be string
    if (typeof data.title !== 'string')
      return { message: 'Title must be string' }

    //isCompleted must be boolean
    if (typeof data.isCompleted !== 'boolean')
      return { message: 'isCompleted must be boolean' }

    const task = await Task.create(data)

    return task
  }

  //get task by id
  public async show({ params }) {
    const task = await Task.findOrFail(params.id)
    return task
  }

  //update task by id
  public async update({ params, request }) {
    const task = await Task.findOrFail(params.id)
    const data = request.only(['title', 'isCompleted'])
    task.merge(data)
    await task.save()
    return task
  }

  //delete task by id
  public async destroy({ params }) {
    const task = await Task.findOrFail(params.id)
    await task.delete()
  }
}
