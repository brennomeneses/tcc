import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Reunion from 'App/Models/Reunion'

export default class ReunionsController {
  public async index() {
    const reunions = await Reunion.query().preload('participants').preload('projects')

    return reunions
  }

  public async store({ request }: HttpContextContract) {
    const { projectsId, participantsId, date } = request.body()

    const reunion = await Reunion.create({
      date,
    })

    const projects = await reunion.related('projects').sync(projectsId as number[])
    const participants = await reunion.related('participants').sync(participantsId as number[])

    return {
      reunion,
      projects,
      participants,
    }
  }

  public async destroy({ request }: HttpContextContract) {
    const { id } = request.params()
    const reunion = await Reunion.findOrFail(id)

    return reunion.delete()
  }
}
