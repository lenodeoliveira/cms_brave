import { RetrieveUserByAdmin } from '@/domain/usecases/users/retrieve-user'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'

export class RetrieveUserByAdminController implements Controller {
    constructor (
    private readonly retrieveUserByAdmin: RetrieveUserByAdmin,
    ) {}
    async handle(request: RetrieveUserByAdminController.Request): Promise<HttpResponse> {
        await this.retrieveUserByAdmin.retrieveUser(request.id)
        return Promise.resolve(null)
    }
}

export namespace RetrieveUserByAdminController {
  export type Request = {
    id: string
  }
}