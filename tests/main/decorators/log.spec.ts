import { LogControllerDecorator } from '@/main/decorators/log'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'

class ControllerStub implements Controller {
    async handle(request: any): Promise<HttpResponse> {
        const httpResponse = {
            statusCode: 200,
            body: {
                name: 'any_name',
                email: 'any_mail@gmail.com',
            }
        }
        return Promise.resolve(httpResponse)
    }
}

type SutTypes = {
  controllerStub: ControllerStub
  sut: LogControllerDecorator
}

const makeSut = (): SutTypes => {
    const controllerStub = new ControllerStub()
    const sut = new LogControllerDecorator(controllerStub)
    return {
        sut, 
        controllerStub
    }

}

describe('LogController Decorator', () => {
    test('Should call controller handle', async () => {
        const { sut, controllerStub } = makeSut()
        const handleSpy = jest.spyOn(controllerStub, 'handle')
        const httpRequest = {
            body: {
                name: 'any_name',
                email: 'any_mail@gmail.com',
                password: '12345',
                passwordConfirmation: '12345',
            }
        }
        await sut.handle(httpRequest)
        expect(handleSpy).toHaveBeenCalledWith(httpRequest)
    })
})