import { LoadContentsByAdmin } from '@/domain/usecases/content/load-contents-by-admin'
import { noContent, ok } from '@/presentation/helpers/http/http-helpers'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'

export class LoadContentsByAdminController implements Controller {
    constructor (private readonly loadContentsByAdmin: LoadContentsByAdmin) {}
    
    async handle (request: LoadContentsByAdminController.Request): Promise<HttpResponse> {
        const content = await this.loadContentsByAdmin.load(request)
        if(!content) {
            return noContent()
        }
        return ok(content)
    }
}
export namespace LoadContentsByAdminController {
  export type Request = {
    id?: string
    sort?: string
    limit?: number
    page?: number
  }
}