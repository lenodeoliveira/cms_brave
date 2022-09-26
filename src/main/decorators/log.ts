import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'

export class LogControllerDecorator implements Controller {
    constructor (
  private readonly controller: Controller
    ) {}
    async handle (request: any): Promise<HttpResponse> {
        const httpResponse = await this.controller.handle(request)
        // if(httpResponse.statusCode === 500) {
        //     //
        // }
        return httpResponse
    }
}