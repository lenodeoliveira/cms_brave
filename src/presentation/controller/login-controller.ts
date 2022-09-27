import { Authentication } from '@/domain/usecases/authentication'
import { serverError, unauthorized } from '@/presentation/helpers/http/http-helpers'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'

export class LoginController implements Controller {
    constructor (
    private readonly authentication: Authentication
    ) {}
    async handle (request: LoginController.Request): Promise<HttpResponse> {
        try {
            const { email, password } = request
            const authenticate = await this.authentication.auth({
                email,
                password
            })
            console.log('auth', authenticate)
            if(!authenticate) {
                return unauthorized()
            }
            return Promise.resolve(null)
        } catch (error) {
            return serverError(error)
        } 
    }
}

export namespace LoginController {
  export type Request = {
    email: string
    password: string
  }
}