import { LoadContentsRepository  } from '@/data/protocols/db/content/load-contents-repository'

export class LoadContentsRepositorySpy implements LoadContentsRepository {
    result = makeFakeContents()
    async loadAll (): Promise<LoadContentsRepository.Result[]> {
        return this.result
    }
}


export const makeFakeContents = (): LoadContentsRepository.Result[] => {
    return [{
        id: 'any_id',
        title: 'any_title',
        userId: 'any_id_User',
        slug: 'any_slug',
        body: 'any_body',
        image: 'any_link',
        published: 1,
        createAt: new Date(),
        updateAt: new Date()
    }]
}