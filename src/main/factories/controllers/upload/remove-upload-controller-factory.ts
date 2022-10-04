import { LogControllerDecorator } from '@/main/decorators/log'
import { RemoveFileUploadControler } from '@/presentation/controller/file-upload/remove-upload-controller'
import { Controller } from '@/presentation/protocols/controller'
import { LogError } from '@/utils/log-error/log-error'

export const makeRemoveUploadController = (): Controller => {
    const controller = new RemoveFileUploadControler()
    return new LogControllerDecorator(controller, new LogError())
}