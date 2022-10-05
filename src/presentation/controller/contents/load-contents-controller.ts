import { LoadContents } from '@/domain/usecases/content/load-contents'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'
import { noContent, ok, serverError } from '@/presentation/helpers/http/http-helpers'

export class LoadContentsController implements Controller {
    constructor (private readonly loadContents: LoadContents) {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async handle (_request: unknown): Promise<HttpResponse> {
        try {
            const contents = await this.loadContents.load()
            return contents.length ? ok(contents) : noContent()

        } catch (error) {
            return serverError(error)
        }
    }
  
}


export namespace LoadContentsController {
  export type Result = {
    title: string
    userId: string,
    slug: string
    image?: string
    body: string
    published: number
    createAt: Date
    updateAt: Date
  }
}

