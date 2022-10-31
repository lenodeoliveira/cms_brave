import { LoadContentByAdminRepository } from '@/data/protocols/db/content/admin/load-content-by-admin-repository'
import { LoadContentByAdmin } from '@/domain/usecases/content/load-content-by-admin'

export class DbLoadContentByAdmin implements LoadContentByAdmin {
    constructor (private readonly loadContentByAdminRepository: LoadContentByAdminRepository) {}
    
    async loadOneContent (id: string): Promise<LoadContentByAdmin.Result> {
        return this.loadContentByAdminRepository.loadContentByAdmin(id)
    }
  
}