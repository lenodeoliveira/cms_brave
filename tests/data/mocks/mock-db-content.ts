import { LoadContentsRepository  } from '@/data/protocols/db/content/load-contents-repository'
import { LoadContents  } from '@/domain/usecases/content/load-contents'

export class LoadContentsRepositorySpy implements LoadContentsRepository {
    params: LoadContentsRepository.Params
    result = makeFakeContents()
    async loadAll (params: LoadContents.Params): Promise<LoadContents.Result> {
        this.params = params
        return this.result
    }
}


export const makeFakeContents = (): LoadContents.Result => {
    return {
        'count': 10,
        'rows': [
            {
                'id': '55345379-7d90-476d-aeb3-d0f4b3f0f376',
                'title': 'title-test',
                'author': 'John Doe',
                'slug': 'slug-test',
                'image': 'body-test',
                'body': 'image-test',
                'published': 0,
                'createAt': null,
                'updateAt': null
            }
        ]
    }
}


