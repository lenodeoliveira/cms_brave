import { LogControllerDecorator } from '@/main/decorators/log'
import { FileUploadController } from '@/presentation/controller/file-upload/file-upload-controller'
import { Controller } from '@/presentation/protocols/controller'
import { LogError } from '@/utils/log-error/log-error'

export const makeUploadController = (): Controller => {
    const controller = new FileUploadController()
    return new LogControllerDecorator(controller, new LogError())
}