import { LogControllerDecorator } from '@/main/decorators/log'
import { RemoveFileUploadControler } from '@/presentation/controller/file-upload/remove-upload-controller'
import { Controller } from '@/presentation/protocols/controller'
import { Files } from '@/data/usecases/files/files'
import { LogError } from '@/utils/log-error/log-error'
import { makeRemoveFileValidation } from './remove-file-validation-factory'

export const makeRemoveUploadController = (): Controller => {
    const filesUtils = new Files()
    const removeFileValidation = makeRemoveFileValidation()
    const controller = new RemoveFileUploadControler(filesUtils, removeFileValidation)
    return new LogControllerDecorator(controller, new LogError())
}