import { HttpResponse } from '@/presentation/protocols/http'
import { Middleware } from '@/presentation/protocols/middleware'
import { forbidden } from '@/presentation/helpers/http/http-helpers'
import { AccessDeniedError } from '@/presentation/errors/access-denied-error'

export class AuthMiddleware implements Middleware {
    async handle (httpRequest: AuthMiddleware.Request) : Promise<HttpResponse> {
        return Promise.resolve(forbidden(new AccessDeniedError()))
    }
}

export namespace AuthMiddleware {
  export type Request = {
    accessToken?: string
  }
}