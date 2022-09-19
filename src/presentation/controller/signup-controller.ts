import { AddAccount } from '@/domain/usecases/add-account'
import { serverError } from '../helpers/http/http-helpers'
import { Controller } from '../protocols/controller'
import { HttpResponse } from '../protocols/http'
import { Validation } from '../protocols/validation'

export class SignUpController implements Controller {
    constructor (
      private readonly addAccount: AddAccount,
      private readonly validation: Validation
    ) {}

    async handle (request: SignUpController.Request): Promise<HttpResponse> {
        try {

            const { name, email ,password } = request
            await this.addAccount.add({
                name, email, password
            })
            return Promise.resolve(null)
        } catch (error: any) {
            return serverError(error)
        }

    }
}

export namespace SignUpController {
  export type Request = {
    name: string
    email: string
    password: string
    passwordConfirmation: string
  }
}