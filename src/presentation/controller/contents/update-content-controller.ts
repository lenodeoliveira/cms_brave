import { UpdateContent } from '@/domain/usecases/content/update-content'
import { noContent, notFound, serverError } from '@/presentation/helpers/http/http-helpers'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'

export class UpdateContentController implements Controller {

    constructor(private readonly updatedContent: UpdateContent) {}

    async handle (request: UpdateContentController.Result): Promise<HttpResponse> {
        try {
            const updatedContent = await this.updatedContent.updateContent(request.id) 
            return updatedContent ? noContent() : notFound(new Error('content not exists'))
        } catch (error) {
            return serverError(error)
        }
    }

}

export namespace UpdateContentController {
  export type Result = {
    id: string
  }
}