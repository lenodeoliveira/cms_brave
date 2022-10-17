import { LoadContentsRepository  } from '@/data/protocols/db/content/load-contents-repository'
import { LoadContents  } from '@/domain/usecases/content/load-contents'
import { LoadContent  } from '@/domain/usecases/content/load-content'
import { AddContentRepository } from '@/data/protocols/db/content/add-content-repository'
import { CheckSlugRepository } from '@/data/protocols/db/content/check-slug-repository'
import { LoadContentRepository } from '../protocols/db/content/load-content-repository'
import { RemoveContentRepository } from '../protocols/db/content/remove-content-repository'
import { UpdateContentRepository } from '../protocols/db/content/update-content-repository'
import { CheckSlugRepositoryForUpDate } from '@/data/protocols/db/content/check-slug-repository-for-update'

export class AddContentRepositorySpy implements AddContentRepository {
    params: AddContentRepository.Params
    result = true

    async add (params: AddContentRepository.Params): Promise<AddContentRepository.Result> {
        this.params = params
        return this.result
    }
}

export class RemoveContentRepositorySpy implements RemoveContentRepository {
    id: string
    result = true
    async remove (id: string): Promise<boolean> {
        this.id = id
        return this.result
    }

}

export class UpdateContentRepositorySpy implements UpdateContentRepository {
    data: UpdateContentRepository.Result
    async update (content: UpdateContentRepository.Result): Promise<void> {
        this.data = content
    }

}

export class CheckSlugRepositoryForUpDateSpy implements CheckSlugRepositoryForUpDate {
    id: string
    slug: string
    result = false

    async checkSlugForUpdate (id: string, slug: string): Promise<CheckSlugRepositoryForUpDate.Result> {
        this.id = id
        this.slug = slug
        return this.result
    }
}

export class CheckSlugRepositorySpy implements CheckSlugRepository {
    slug: string
    result = false

    async checkSlug (slug: string): Promise<CheckSlugRepository.Result> {
        this.slug = slug
        return this.result
    }
}



export class LoadContentsRepositorySpy implements LoadContentsRepository {
    params: LoadContentsRepository.Params
    result = makeFakeContents()
    async loadAll (params: LoadContents.Params): Promise<LoadContents.Result> {
        this.params = params
        return this.result
    }
}

export class LoadContentRepositorySpy implements LoadContentRepository {
    slug: string
    result = makeFakeContent()
    async findOneContent (slug: string): Promise<LoadContentRepository.Result> {
        this.slug = slug
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

export const makeFakeContent = (): LoadContent.Result => (
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
)