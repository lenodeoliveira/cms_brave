import { AddContent } from '@/domain/usecases/content/add-content'
import { badRequest, noContent, serverError } from '@/presentation/helpers/http/http-helpers'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'
import { Validation } from '@/presentation/protocols/validation'

export class AddContentController implements Controller {

    constructor (
      private readonly validation: Validation,
      private readonly addContent: AddContent
    ) {}

    async handle(request: AddContentController.Result): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(request)
            if(error) {
                return badRequest(error)
            }

            await this.addContent.add(request)
            return noContent()
        } catch (error) {
            return serverError(error)
        }
        
    }
}

export namespace AddContentController {
  export type Result = {
    title: string
    slug: string
    image?: string
    body: string
    published: number
  }  
}
