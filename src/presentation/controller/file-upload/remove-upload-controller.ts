import { noContent, notFound, serverError } from '@/presentation/helpers/http/http-helpers'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'
import { promisify } from 'util'
import fs from 'fs'
import path from 'path'

export class RemoveFileUploadControler implements Controller {
    async handle(request: RemoveFileUploadControler.Result): Promise<HttpResponse> {
        try { 
            const { image } = request
            if (!fs.existsSync(path.resolve(__dirname, '..', '..', '..', 'static', image))) {
                return notFound(new Error('File not found'))
            }
            
            promisify(fs.unlink)(path.resolve(__dirname, '..', '..', '..', 'static', image))
            return noContent()
        } catch (error) {
            return  serverError(error)
        }
        
    }
}

export namespace RemoveFileUploadControler {
  export type Result = {
      image: string
      userId: string
    }
}
