
import { AddContentRepository } from '@/data/protocols/db/content/add-content-repository'
import { Content } from './entities/users'

export class ContentMysqlRepository implements AddContentRepository {
    async add (data: AddContentRepository.Params): Promise<void> {
        await Content.create(data)
    }
}
