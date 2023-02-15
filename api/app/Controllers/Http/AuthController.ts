import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async login ({ request, auth, response }: HttpContextContract) {
    const code = request.input('code')
    const user = await User.findByOrFail('code', code)
    const token = await auth.use('api').generate(user)

    return response.json({
      user: {
        name: user.name,
        role: user.role,
      },
      token: token.token,
    })
  }

  public async me ({ auth, response }: HttpContextContract) {
    const user = await auth.authenticate()

    return response.json({
      user: {
        name: user.name,
        role: user.role,
      },
    })
  }
}
