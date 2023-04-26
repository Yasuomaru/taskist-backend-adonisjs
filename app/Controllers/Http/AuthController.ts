import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  //Register new user
  public async register(ctx: HttpContextContract) {
    try {
      const { email, password } = ctx.request.only(['email', 'password'])

      //Validate email and password
      if (!email || !password) {
        return ctx.response.badRequest({ message: 'Invalid email or password' })
      }

      //Create new user
      const user = await User.create({ email, password })
      return user
    }
    catch (error) {
      return ctx.response.badRequest(error)
    }
  }

  //Login user
  public async login(ctx: HttpContextContract) {
    try {
      // get email and password from request
      const { email, password } = ctx.request.only(['email', 'password'])

      // authenticate user
      const token = await ctx.auth.use('api').attempt(email, password)

      return ctx.response.json({ token })
    }
    catch (error) {
      return ctx.response.badRequest("Invalid credentials")
    }
  }

  //Logout user
  public async logout(ctx: HttpContextContract) {
    try {
      // logout user
      await ctx.auth.use('api').logout()

      return ctx.response.json({ message: 'Logout success' })
    }
    catch (error) {
      return ctx.response.badRequest(error)
    }
  }
}
