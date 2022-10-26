import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'
import { Validation } from '@/presentation/protocols/validation'
import { ResetUserPassword } from '@/domain/usecases/reset-password/reset-password'

export class ResetPasswordController implements Controller {
    constructor(
      private readonly resetPassword: ResetUserPassword,
      private readonly validation: Validation
    ){}

    async handle (request: ResetPasswordController.Request): Promise<HttpResponse> {
        await this.resetPassword.resetPassword(request.password)
        return Promise.resolve(null)
    } 
}

export namespace ResetPasswordController {
  export type Request = {
    password: string
    passwordConfirmation: string
  }
}