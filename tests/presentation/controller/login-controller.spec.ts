import { AuthenticationSpy } from '../mocks/mock-account'
import { LoginController } from '@/presentation/controller/login-controller'
import { unauthorized } from '@/presentation/helpers/http/http-helpers'

type SutTypes = {
  authenticationSpy: AuthenticationSpy
  sut: LoginController
}

const mockFakeRequest = (): LoginController.Request => ({
    email: 'any_email@mail.com',
    password: 'any_password'
})


const makeSut = (): SutTypes =>{
    const authenticationSpy = new AuthenticationSpy()
    const sut = new LoginController(authenticationSpy)
    return {
        sut, 
        authenticationSpy
    }
}

describe('Login Controller', () => {
    test('Should call Authentication with correct values', async () => {
        const { sut, authenticationSpy } = makeSut()
        const authSpy = jest.spyOn(authenticationSpy, 'auth')
        await sut.handle(mockFakeRequest())
        expect(authSpy).toHaveBeenCalledWith({
            email: 'any_email@mail.com',
            password: 'any_password'
        })
    })

    test('Should return an error when authentication is not possible', async () => {
        const { sut, authenticationSpy } = makeSut()
        authenticationSpy.result = null
        const httpResponse = await sut.handle(mockFakeRequest())
        expect(httpResponse).toEqual(unauthorized())
    })
})