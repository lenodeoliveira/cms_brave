import { LoadContentByAdmin } from '@/domain/usecases/content/load-content-by-admin'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'

export class LoadContentByAdminController implements Controller {
    constructor(private readonly loadContentByAdmin: LoadContentByAdmin) {}

    async handle (request: LoadContentByAdminController.Request): Promise<HttpResponse> {
        await this.loadContentByAdmin.loadOneContent(request.id)
        return Promise.resolve(null)
    } 
}

export namespace LoadContentByAdminController {
  export type Request = {
    id: string
  }
}