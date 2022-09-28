import { badRequest } from '@/presentation/helpers/http/http-helpers'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'
import { Validation } from '@/presentation/protocols/validation'

export class AddContentController implements Controller {

    constructor (private readonly validation: Validation) {}

    async handle(request: AddContentController.Result): Promise<HttpResponse> {
        const error = this.validation.validate(request)
        if(error) {
            return badRequest(error)
        }
        return Promise.resolve(null)
    }
}

export namespace AddContentController {
  export type Result = {
    title: string
    slug: string
    image: string
    body: string
    published: number
  }  
}
