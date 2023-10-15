import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'

export default class TasksController {
  public async index({ auth, response }: HttpContextContract) {
    const user = auth.use('api').user

    if (!user) return response.unauthorized('User not logged in')

    const tasks = await Task.findBy('userId', user.id)

    return tasks
  }

  public async show({ request, auth, response }: HttpContextContract) {
    const { id } = request.params()
    const user = auth.use('api').user

    if (!user) return response.unauthorized('User not logged in')

    const tasks = await Task.query().where('projectId', id).preload('user')

    return tasks
  }

  public async store({ request }: HttpContextContract) {
    const { description, initialDate, estimatedDate, finalDate, projectId, userId } = request.body()

    const task = await Task.create({
      description,
      initialDate,
      estimatedDate,
      finalDate,
      projectId,
      userId,
    })

    return task
  }
}
