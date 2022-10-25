import {Controller} from '@/presentation/protocols/controller'
import {HttpResponse} from '@/presentation/protocols/http'
import {ForgotPassword} from '@/domain/usecases/forgot-password/forgot-password'
import {Validation} from '@/presentation/protocols/validation'

export class ForgotPasswordController implements Controller {
    constructor(
      private  readonly forgoPassword: ForgotPassword,
      private readonly validation: Validation,
    ) {}
  
    async handle (request: ForgotPasswordController.Request): Promise<HttpResponse> {
        await  this.validation.validate(request)
        await this.forgoPassword.generateToken(request.email)
        return Promise.resolve(null)
    }
}

export namespace ForgotPasswordController {
  export type Request = {
    email: string
  }
}