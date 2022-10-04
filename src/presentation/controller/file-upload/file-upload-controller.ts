import { badRequest, noContent } from '@/presentation/helpers/http/http-helpers'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'
import { Validation } from '@/presentation/protocols/validation'
export class FileUploadController implements Controller {
    constructor (
    private readonly validation: Validation
    ) {}

    async handle(request: RemoveFileUploadControler.Result): Promise<HttpResponse> {
        const { size, mimetype } = request
        const error = this.validation.validate({ size, mimetype })
        if(error) {
            return badRequest(error)
        }
        return noContent()
        
    }
}

export namespace RemoveFileUploadControler {
  export type Result = {
          originalname: string,
          mimetype: string,
          filename: string,
          size: number,
          userId: string,
    }
}
