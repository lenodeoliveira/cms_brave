
import { AddContentRepository } from '@/data/protocols/db/content/add-content-repository'
import { LoadContentsRepository } from '@/data/protocols/db/content/load-contents-repository'
import { LoadContentRepository } from '@/data/protocols/db/content/load-content-repository'
import { CheckSlugRepository } from '@/data/protocols/db/content/check-slug-repository'
import { RemoveContentRepository } from '@/data/protocols/db/content/remove-content-repository'
import { UpdateContentRepository } from '@/data/protocols/db/content/update-content-repository'
import { LoadContents } from '@/domain/usecases/content/load-contents'
import { Content, User } from './entities/users'

export class ContentMysqlRepository implements AddContentRepository, LoadContentsRepository, CheckSlugRepository, LoadContentRepository, RemoveContentRepository, UpdateContentRepository {
    
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

        const mapContents = this.mapLoadContents(contents.rows, contents.count)
        const loadAllContents = mapContents !== null ? mapContents : null
        return loadAllContents
    }

    private mapLoadContents (data: any[], count?: number): LoadContents.Result {
        if(data === null ) return null
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

    async findOneContent (slug: string): Promise<LoadContentRepository.Result> {
        const content = await Content.findOne({
            include: [{
                model: User,
                attributes: ['name']
            },
            ],
            where: {
                slug: slug
            }
        })
        const contentMap = this.mapLoadContents(content === null ? null : [content])
        const contentBySlug = contentMap !== null ? contentMap.rows[0] : null
        return contentBySlug
    }

    async remove (id: string): Promise<boolean> {
        const contentRemoved = await Content.destroy({
            where: {
                id: id
            }
        })
        
        return contentRemoved ? true : false
    }

    async update (content: UpdateContentRepository.Result): Promise<boolean> {
        const contentById = await Content.findOne({
            where: { id: content.id }
        })   

        if(!contentById) return false

        const res = await Content.update({
            title: content.title,
            image: content.image,
            userId: content.userId,
            body: content.body,
            slug: content.slug,
            published: content.published

        }, {
            where: {
                id: content.id
            }
        })
        return res ? true : false
    }
}



