import { AddContent } from '@/domain/usecases/content/add-content'

export class AddContentSpy implements AddContent{
    params: any
    async add (params: any): Promise<void> {
        this.params = params
    }
}