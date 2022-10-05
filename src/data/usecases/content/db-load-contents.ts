import { LoadContentsRepository } from '@/data/protocols/db/content/load-contents-repository'
import { LoadContents } from '@/domain/usecases/content/load-contents'

export class DbLoadContents implements LoadContents {
    constructor (private readonly loadContentsRepository: LoadContentsRepository) {}

    async load (): Promise<LoadContents.Result[]> {
        return await this.loadContentsRepository.loadAll()
    } 
}