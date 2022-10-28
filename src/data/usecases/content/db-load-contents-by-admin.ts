import { LoadContentsByAdminRepository } from '@/data/protocols/db/content/load-contents-by-admin-repository'
import { LoadContentsByAdmin } from '@/domain/usecases/content/load-contents-by-admin'

export class DbLoadContentsByAdmin implements LoadContentsByAdmin {
    constructor (private readonly loadContentsByAdminRepository: LoadContentsByAdminRepository) {}

    async load (params: LoadContentsByAdmin.Params): Promise<LoadContentsByAdmin.Result> {
        const content = await this.loadContentsByAdminRepository.loadContents(params)
        
        return content
    } 
}