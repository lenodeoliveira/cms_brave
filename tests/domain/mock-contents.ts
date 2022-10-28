import { LoadContentsByAdmin } from './usecases/content/load-contents-by-admin'

export const mockLoadContentsByAdmin = (): LoadContentsByAdmin.Result => ({
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