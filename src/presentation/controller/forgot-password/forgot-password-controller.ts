import {Controller} from '@/presentation/protocols/controller'
import {HttpResponse} from '@/presentation/protocols/http'
import {ForgotPassword} from '@/domain/usecases/forgot-password/forgot-password'
import {Validation} from '@/presentation/protocols/validation'
import {badRequest, notFound} from '@/presentation/helpers/http/http-helpers'

export class ForgotPasswordController implements Controller {
    constructor(
      private  readonly forgoPassword: ForgotPassword,
      private readonly validation: Validation,
    ) {}
  
    async handle (request: ForgotPasswordController.Request): Promise<HttpResponse> {
        const error = await  this.validation.validate(request)
        if(error) return badRequest(error)
        
        const user = await this.forgoPassword.generateToken(request.email)
        if (!user) {
            return notFound(new Error('User does not exist'))
        }
        return Promise.resolve(null)
    }
}

export namespace ForgotPasswordController {
  export type Request = {
    email: string
  }
}