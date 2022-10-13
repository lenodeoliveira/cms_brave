import { UpdateContent } from '@/domain/usecases/content/update-content'
import { UpdateContentRepository } from '@/data/protocols/db/content/update-content-repository'

export class DbUpdateContent implements UpdateContent {
    constructor (private readonly updateContentRepository: UpdateContentRepository) {}
    
    async updateContent (content: UpdateContent.Result): Promise<boolean> {
        const updatedContent = await this.updateContentRepository.update(content)
        return updatedContent
    }
}