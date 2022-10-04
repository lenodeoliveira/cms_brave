import { noContent, serverError } from '@/presentation/helpers/http/http-helpers'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'
import { MulterError } from 'multer'


export class FileUploadController implements Controller {
    async handle(request: HttpRequest): Promise<HttpResponse> {
        try {

            console.log('REQUEST ====>', request)
            if (request instanceof MulterError) {
                throw new Error('Error')
                
            }
            return noContent()
        } catch (error) {
            return  serverError(error)
        }
        
    }
}


type HttpRequest = { file?: { buffer: Buffer, mimeType: string }, userId: string }
