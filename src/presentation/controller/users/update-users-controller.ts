import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'
import { UpdateUserByAdmin } from '@/domain/usecases/users/update-user'
import { Validation } from '../../protocols/validation'
import { badRequest, noContent, notFound, serverError } from '@/presentation/helpers/http/http-helpers'

export class UpdateUserByAdminController implements Controller {
    constructor (
    private readonly updateUserByAdmin: UpdateUserByAdmin,
    private readonly validation: Validation,
    ) {}

    async handle (request: UpdateUserByAdminController.Request): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(request)
            if(error) {
                return badRequest(error)
            }
            const isValid = await this.updateUserByAdmin.registerUser(request)
            if (!isValid) {
                return notFound(new Error('User not exists'))
            }
            return noContent()
        } catch (error) {
            return serverError(error)
        }
    }
}


export namespace UpdateUserByAdminController {
  export type Request = {
    name: string
    status?: number
    role?: string
  }
}