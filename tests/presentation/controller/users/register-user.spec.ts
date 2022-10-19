import { RegisterUserSpy } from '../../mocks/mock-users'
import { RegisterUserController } from '@/presentation/controller/users/register-users-controller'
import { ValidationSpy } from '../../mocks/mock-validation'
import { throwError } from '../../../domain/test-helpers'
import { ServerError, MissingParamError, EmailInUseError } from '@/presentation/errors/'
import { serverError, badRequest, forbidden, ok, noContent } from '@/presentation/helpers/http/http-helpers'



const mockRequest = (): RegisterUserController.Request => ({
    name: 'any_name',
    email: 'any_mail@mail.com',
    password: 'any_password',
    status: 1,
    role: 'any_role'
})




type SutTypes = {
  sut: RegisterUserController
  registerUserSpy: RegisterUserSpy
  validationSpy: ValidationSpy
}
const makeSut = (): SutTypes => {
    const registerUserSpy = new RegisterUserSpy()
    const validationSpy = new ValidationSpy()
    const sut = new RegisterUserController(registerUserSpy, validationSpy)
    return {
        sut,
        registerUserSpy,
        validationSpy
    }
}

describe('RegisterUser Controller', () => {
    test('Should call RegisterUser the correct values', async () => {
        const { sut, registerUserSpy } = makeSut()
        const registerSpy = jest.spyOn(registerUserSpy, 'register')
        await sut.handle(mockRequest())
        expect(registerSpy).toHaveBeenCalledWith({
            name: 'any_name',
            email: 'any_mail@mail.com',
            password: 'any_password',
            status: 1,
            role: 'any_role'
        })
    })

    test('Should return 400 if Validation returns an error', async () => {
        const { sut, validationSpy } = makeSut()
        jest.spyOn(validationSpy, 'validate').mockReturnValueOnce(new MissingParamError('any_field'))
        const httpResponse = await sut.handle(mockRequest())
        expect(httpResponse).toEqual(badRequest(new MissingParamError('any_field')))
    })

    test('Should return 403 if email is already in use', async () => {
        const { sut, registerUserSpy } = makeSut()
        jest.spyOn(registerUserSpy, 'register').mockReturnValueOnce(Promise.resolve(false))
        const httpResponse = await sut.handle(mockRequest())
        expect(httpResponse).toEqual(forbidden(new EmailInUseError()))
    })

    test('Should 500 if RegisterUser throws', async () => {
        const { sut, registerUserSpy } = makeSut()
        jest.spyOn(registerUserSpy, 'register').mockImplementationOnce(throwError)
        const httpResponse = await sut.handle(mockRequest())
        expect(httpResponse).toEqual(serverError(new ServerError(null)))
    })

    test('Should ', async () => {
        const { sut } = makeSut()
        const httpResponse = await sut.handle(mockRequest())
        expect(httpResponse).toEqual(noContent())
    })
})