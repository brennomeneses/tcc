import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company'
import Criterion from 'App/Models/Criterion'

export default class CriteriaController {
  public async store({ request, auth, response }: HttpContextContract) {
    const { name, description, weight, zero, first, second, third, isBenefit } = request.body()

    const user = auth.use('api').user

    if (!user) return response.unauthorized('Token required')

    const userCompany = await Company.findBy('id', user.companyId)

    if (!userCompany) return response.notFound('Company not found')

    const criterion = await Criterion.create({
      name,
      description,
      weight,
      zero,
      first,
      second,
      third,
      isBenefit,
      companyId: userCompany.id,
    })

    return criterion
  }
}
