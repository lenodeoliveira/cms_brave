
import { AddContentRepository } from '@/data/protocols/db/content/add-content-repository'
import { LoadContentsRepository } from '@/data/protocols/db/content/load-contents-repository'
import { CheckSlugRepository } from '@/data/protocols/db/content/check-slug-repository'
import { LoadContents } from '@/domain/usecases/content/load-contents'
import { Content, User } from './entities/users'

export class ContentMysqlRepository implements AddContentRepository, LoadContentsRepository, CheckSlugRepository {
    
    async add (data: AddContentRepository.Params): Promise<AddContentRepository.Result> {
        await Content.create(data)
        return true
    }

    async checkSlug (slug: string): Promise<boolean> {
        const exists = await Content.findAll({
            attributes: [
                'slug'
            ],
            where: {
                slug: slug
            }
        })
        return exists.length !== 0

    }

    async loadAll (params: LoadContents.Params): Promise<LoadContents.Result> {
        const reqOffSet = Number(params.page)
        const reqLimit = Number(params.limit)

        const offset =  isNaN(reqOffSet) ? 1 : reqOffSet
        const limit = isNaN(reqLimit) ? 50 : reqLimit
        const contents = await Content.findAndCountAll({
            offset: offset,
            limit: limit,
            attributes: [
                'id',
                'title',
                'slug',
                'image',
                'body',
                'published',
                'createdAt',
                'updatedAt'
            ],
            include: [{
                model: User,
                attributes: ['name'],
                order: [
                    ['title', 'DESC']
                ]
            },
            ]
        })

        const loadAllContents = this.mapLoadContents(contents.rows, contents.count)
        return loadAllContents
    }

    private mapLoadContents (data: any[], count: number): LoadContents.Result {
        const rows = data.map(item => {
            
            return {
                id: item.id,
                title: item.title,
                author: item['User'].name,
                slug: item.slug,
                image: item?.image,
                body: item.body,
                published: item.published,
                createAt: item.createdAt, 
                updateAt: item.updatedAt,
            }        
        })

        return {
            count: count,
            rows: rows
        }
    }
}


    


