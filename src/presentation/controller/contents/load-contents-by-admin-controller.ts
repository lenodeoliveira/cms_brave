import { LoadContentsByAdmin } from '@/domain/usecases/content/load-contents-by-admin'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'

export class LoadContentsByAdminController implements Controller {
    constructor (private readonly loadContentsByAdmin: LoadContentsByAdmin) {}
    async handle (request: any): Promise<HttpResponse> {
        await this.loadContentsByAdmin.load(request)
        return Promise.resolve(null)
    }
}
export namespace LoadContentsByAdminController {
  export type Result = {
    id?: string
    sort?: string
    limit?: number
    page?: number
  }
}