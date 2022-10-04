import { LogControllerDecorator } from '@/main/decorators/log'
import { FileUploadController } from '@/presentation/controller/file-upload/file-upload-controller'
import { Controller } from '@/presentation/protocols/controller'
import { LogError } from '@/utils/log-error/log-error'
import { makeFileValidation } from './upload-validation-factory'

export const makeUploadController = (): Controller => {
    const fileValidation = makeFileValidation() 
    const controller = new FileUploadController(fileValidation)
    
    return new LogControllerDecorator(controller, new LogError())
}