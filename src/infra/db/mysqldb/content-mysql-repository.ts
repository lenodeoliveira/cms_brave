
import { AddContentRepository } from '@/data/protocols/db/content/add-content-repository'
import { LoadContentsRepository } from '@/data/protocols/db/content/load-contents-repository'
import { LoadContents } from '@/domain/usecases/content/load-contents'
import { Content, User } from './entities/users'

export class ContentMysqlRepository implements AddContentRepository, LoadContentsRepository {
    async add (data: AddContentRepository.Params): Promise<void> {
        await Content.create(data)
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


    


