import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class UsersController {
  public async index({}: HttpContextContract) {
    const users = await User.query().preload('projects').preload('company')
    return users
  }

  public async store({ request }: HttpContextContract) {
    const { password, email, name, role, companyId } = request.body()

    const user = await User.create({
      email,
      name,
      password,
      role,
      companyId,
    })

    return user
  }

  public async verify({ request }: HttpContextContract) {
    const { password, id } = request.body()

    const user = await User.find(id)

    if (user) return await Hash.verify(user.password, password)
    else return null
  }

  public async login({ request, response, auth }: HttpContextContract) {
    const { email, password } = request.body()

    try {
      const user = await User.findBy('email', email)

      if (!user) return response.notFound('User not found')

      if (!(await Hash.verify(user.password, password)))
        return response.unauthorized('Invalid credentials')

      const token = await auth.use('api').generate(user)

      return token
    } catch (error) {
      console.log(error)
      return response.internalServerError('Internal Error')
    }
  }
}
