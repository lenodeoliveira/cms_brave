import { AddContent } from '@/domain/usecases/content/add-content'
import { LoadContents } from '@/domain/usecases/content/load-contents'

export class AddContentSpy implements AddContent{
    params: any
    async add (params: any): Promise<void> {
        this.params = params
    }
}

export class LoadContentsSpy implements LoadContents {
    result = makeFakeContents()
    async load (): Promise<LoadContents.Result[]>{
        return this.result
    }
}


const makeFakeContents = (): any => {
    return [
        {
            title: 'any_title',
            nameUser: 'any_user',
            slug: 'any_slug',
            body: 'any_body',
            image: 'any_link',
            published: 1,
            createAt: new Date(),
            updateAt: new Date()
        },
        {
            title: 'other_title',
            nameUser: 'other_user',
            slug: 'other_slug',
            body: 'other_body',
            image: 'other_link',
            published: 1,
            createAt: new Date(),
            updateAt: new Date()
        }
    ]
}