import {Controller} from '@/presentation/protocols/controller'
import {HttpResponse} from '@/presentation/protocols/http'
import {ForgotPassword} from '@/domain/usecases/forgot-password/forgot-password'

export class ForgotPasswordController implements Controller {
    constructor(private  readonly forgoPassword: ForgotPassword) {}
  
    async handle (request: ForgotPasswordController.Request): Promise<HttpResponse> {
        await this.forgoPassword.generateToken(request.email)
        return Promise.resolve(null)
    }
}

export namespace ForgotPasswordController {
  export type Request = {
    email: string
  }
}