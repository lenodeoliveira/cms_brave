import { RegisterUser } from '@/domain/usecases/users/register-users'
import { EmailInUseError } from '@/presentation/errors'
import { badRequest, forbidden, noContent, serverError } from '@/presentation/helpers/http/http-helpers'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'
import { Validation } from '@/presentation/protocols/validation'

export class RegisterUserController implements Controller {
    constructor (
    private readonly registerUser: RegisterUser,
    private readonly validation: Validation,
    ) {}
    async handle (request: RegisterUserController.Request): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(request)
            if(error) {
                return badRequest(error)
            }

            const isValid = await this.registerUser.register(request)
            if(!isValid) {
                return forbidden(new EmailInUseError())
            }

            return noContent()
        } catch (error) {
            return serverError(error)
        }
    }

}

export namespace RegisterUserController {
  export type Request = {
    name: string
    email: string
    password: string
    status: number
    role: string
  }
}