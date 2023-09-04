import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Project from 'App/Models/Project'

export default class ProjectsController {
  public async index({}: HttpContextContract) {
    const projects = await Project.all()

    return projects
  }

  public async store({ request }: HttpContextContract) {
    const { name, description, grade, userIds } = request.body()

    const project = await Project.create({
      name,
      description,
      grade,
    })

    const savedProject = await project.related('users').sync(userIds as number[])

    return { project, savedProject }
  }
}
