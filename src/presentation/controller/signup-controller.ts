import { AddAccount } from '@/domain/usecases/add-account'
import { Controller } from '../protocols/controller'
import { HttpResponse } from '../protocols/http'

export class SignUpController implements Controller {
    constructor (private readonly addAccount: AddAccount) {}

    async handle (request: SignUpController.Request): Promise<HttpResponse> {
        const { name, email ,password } = request
        await this.addAccount.add({
            name, email, password
        })
        return Promise.resolve(null)

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