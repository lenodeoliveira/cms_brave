import { LoadContentByAdmin } from '@/domain/usecases/content/load-content-by-admin'
import { LoadContentsByAdmin } from '@/domain/usecases/content/load-contents-by-admin'

export const mockLoadContentsByAdmin = (): LoadContentsByAdmin.Result => {
    return {
        count: 1,
        rows: [{
            id: 'any_id',
            title: 'any_title',
            author: 'any_author',
            slug: 'any-slug',
            image: 'url_link',
            body: 'any_desc',
            published: 1,
            createAt: new Date(),
            updateAt: new Date()
        }
        ]
    }   
}

export const mockLoadContentByAdmin = (): LoadContentByAdmin.Result => ({
    id: 'any_id',
    title: 'any_title',
    author: 'any_author',
    slug: 'any-slug',
    image: 'url_link',
    body: 'any_desc',
    published: 1,
    createAt: new Date(),
    updateAt: new Date()
})

