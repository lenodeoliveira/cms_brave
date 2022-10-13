import { UpdateContent } from '@/domain/usecases/content/update-content'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'

export class UpdateContentController implements Controller {

    constructor(private readonly updatedContent: UpdateContent) {}

    async handle (request: UpdateContentController.Result): Promise<HttpResponse> {
        this.updatedContent.updateContent(request.id) 
        return Promise.resolve(null)
    }

}

export namespace UpdateContentController {
  export type Result = {
    id: string
  }
}