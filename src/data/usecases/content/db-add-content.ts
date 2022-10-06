import { AddContentRepository } from '@/data/protocols/db/content/add-content-repository'
import { AddContent } from '@/domain/usecases/content/add-content'

export class DbAddContent implements AddContent {
    constructor (private readonly addContentRepository: AddContentRepository) {}

    async add (data: AddContent.Params): Promise<void> {
        await this.addContentRepository.add(data)
    } 
}