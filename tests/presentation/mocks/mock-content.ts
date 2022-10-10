import { AddContent } from '@/domain/usecases/content/add-content'
import { LoadContent } from '@/domain/usecases/content/load-content'
import { LoadContents } from '@/domain/usecases/content/load-contents'

export class AddContentSpy implements AddContent{
    params: any
    result = true
    async add (params: any): Promise<AddContent.Result> {
        this.params = params
        return this.result
    }
}

export class LoadContentsSpy implements LoadContents {
    result = makeFakeContents()
    params: LoadContents.Params
    async load (params: LoadContents.Params): Promise<LoadContents.Result>{
        this.params = params
        return this.result
    }
}

export class LoadContentSpy implements LoadContent {
    result = makeFakeContent()
    slug: string
    async loadOne (slug: string): Promise<LoadContent.Result>{
        this.slug = slug
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

const makeFakeContent = (): any => ({
    title: 'other_title',
    author: 'other_user',
    slug: 'other_slug',
    body: 'other_body',
    image: 'other_link',
    published: 1,
    createAt: new Date(),
    updateAt: new Date()
})