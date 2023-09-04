import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company'

export default class CompaniesController {
  public async index({}: HttpContextContract) {
    const companies = await Company.query()

    return companies
  }

  public async store({ request }: HttpContextContract) {
    const { name, bannerImage } = request.body()

    const company = await Company.create({
      name,
      bannerImage,
    })

    return company
  }
}
