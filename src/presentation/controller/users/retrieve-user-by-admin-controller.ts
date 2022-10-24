import { RetrieveUserByAdmin } from '@/domain/usecases/users/retrieve-user'
import { noContent } from '@/presentation/helpers/http/http-helpers'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'

export class RetrieveUserByAdminController implements Controller {
    constructor (
    private readonly retrieveUserByAdmin: RetrieveUserByAdmin,
    ) {}
    async handle(request: RetrieveUserByAdminController.Request): Promise<HttpResponse> {
        const user = await this.retrieveUserByAdmin.retrieveUser(request.id)
        if(!user) {
            return noContent()
        }
        return Promise.resolve(null)
    }
}

export namespace RetrieveUserByAdminController {
  export type Request = {
    id: string
  }
}