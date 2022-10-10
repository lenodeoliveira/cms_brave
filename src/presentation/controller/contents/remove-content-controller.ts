import { RemoveContent } from '@/domain/usecases/content/remove-content'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'

export class RemoveContentController implements Controller {
    constructor(private readonly removeContent: RemoveContent) {}
    
    async handle (request: RemoveContentController.Result): Promise<HttpResponse> {
        await this.removeContent.removeContent(request.id)
        return Promise.resolve(null)
    }
}

export namespace RemoveContentController {
  export type Result = {
    id: string
  }
}