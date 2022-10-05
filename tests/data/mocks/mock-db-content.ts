import { LoadContentsRepository  } from '@/data/protocols/db/content/load-contents-repository'
import { LoadContents  } from '@/domain/usecases/content/load-contents'

export class LoadContentsRepositorySpy implements LoadContentsRepository {
    result = makeFakeContents()
    async loadAll (): Promise<LoadContents.Result[]> {
        return this.result
    }
}


export const makeFakeContents = (): LoadContents.Result[] => {
    return [{
        id: 'any_id',
        title: 'any_title',
        nameUser: 'any_id_User',
        slug: 'any_slug',
        body: 'any_body',
        image: 'any_link',
        published: 1,
        createAt: new Date(),
        updateAt: new Date()
    }]
}