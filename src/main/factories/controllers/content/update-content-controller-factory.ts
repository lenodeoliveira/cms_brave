import { DbUpdateContent } from '@/data/usecases/content/db-update-content'
import { ContentMysqlRepository } from '@/infra/db/mysqldb/content-mysql-repository'
import { LogControllerDecorator } from '@/main/decorators/log'
import { UpdateContentController } from '@/presentation/controller/contents/update-content-controller'
import { Controller } from '@/presentation/protocols/controller'
import { LogError } from '@/utils/log-error/log-error'

export const makeUpdateContentController = (): Controller => {
    const contentMysqlRepository = new ContentMysqlRepository()
    const dbUpdateContent = new DbUpdateContent(contentMysqlRepository) 
    const controller = new UpdateContentController(dbUpdateContent)
    return new LogControllerDecorator(controller, new LogError())
}