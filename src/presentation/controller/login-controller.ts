import { Authentication } from '@/domain/usecases/authentication'
import { serverError } from '@/presentation/helpers/http/http-helpers'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'

export class LoginController implements Controller {
    constructor (
    private readonly authentication: Authentication
    ) {}
    async handle (request: LoginController.Request): Promise<HttpResponse> {
        try {
            await this.authentication.auth(request)
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