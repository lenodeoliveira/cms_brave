import { UpdateContent } from '@/domain/usecases/content/update-content'
import { noContent, notFound } from '@/presentation/helpers/http/http-helpers'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'

export class UpdateContentController implements Controller {

    constructor(private readonly updatedContent: UpdateContent) {}

    async handle (request: UpdateContentController.Result): Promise<HttpResponse> {
        const updatedContent = this.updatedContent.updateContent(request.id) 
        return updatedContent ? noContent() : notFound(new Error('content not exists'))
    }

}

export namespace UpdateContentController {
  export type Result = {
    id: string
  }
}