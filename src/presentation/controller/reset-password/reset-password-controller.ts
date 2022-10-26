import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'
import { Validation } from '@/presentation/protocols/validation'
import { ResetUserPassword } from '@/domain/usecases/reset-password/reset-password'
import { badRequest } from '@/presentation/helpers/http/http-helpers'

export class ResetPasswordController implements Controller {
    constructor(
      private readonly resetPassword: ResetUserPassword,
      private readonly validation: Validation
    ){}

    async handle (request: ResetPasswordController.Request): Promise<HttpResponse> {
        
        const error = this.validation.validate(request)

        if(error) {
            return badRequest(error)
        }
      
        const { email, code, password } = request
        await this.resetPassword.resetPassword({ email, code, password})
        return Promise.resolve(null)
    } 
}

export namespace ResetPasswordController {
  export type Request = {
    email: string
    code: string
    password: string
    passwordConfirmation: string
  }
}