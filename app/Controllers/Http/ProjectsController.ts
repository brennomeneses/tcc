import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Effort from 'App/Models/Effort'
import Project from 'App/Models/Project'

export default class ProjectsController {
  public async index({ auth, response }: HttpContextContract) {
    const { user } = auth.use('api')

    if (!user) return response.notFound('User not found')

    const projects = await Project.query()
      .preload('users')
      .preload('projectManager')
      .preload('effort', (effort) => {
        effort.preload('criterion')
      })

    return projects
  }

  public async store({ request, auth, response }: HttpContextContract) {
    const { user } = auth.use('api')

    if (!user) return response.notFound('User not found')

    const { name, description, grade, userIds, stackeholder, price, deadline, dice, effort } =
      request.body()

    const project = await Project.create({
      name,
      stackeholder,
      price,
      deadline,
      dice,
      description,
      grade,
      projectManagerId: user.id,
    })

    const criteria = await Effort.createMany(effort)

    const savedCriteria = await project.related('effort').createMany(criteria)

    const savedProject = await project.related('users').sync(userIds as number[])

    return { project, savedProject, savedCriteria }
  }
}
