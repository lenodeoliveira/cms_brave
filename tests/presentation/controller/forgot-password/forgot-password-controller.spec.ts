import {ForgotPasswordController} from '@/presentation/controller/forgot-password/forgot-password-controller'
import {ForgotPasswordSpy} from '../../mocks/mock-forgot-password'
import {ValidationSpy} from '../../mocks/mock-validation'
import {badRequest, forbidden, notFound} from '@/presentation/helpers/http/http-helpers'
import {EmailInUseError} from '@/presentation/errors'

type SutTypes = {
  sut: ForgotPasswordController
  forgotPasswordSpy: ForgotPasswordSpy
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
    const forgotPasswordSpy = new ForgotPasswordSpy()
    const validationSpy = new ValidationSpy()
    const sut = new ForgotPasswordController(forgotPasswordSpy, validationSpy)
  
    return {
        sut,
        forgotPasswordSpy,
        validationSpy
    }
}

describe('ForgotPassWordController', () => {
    test('Should call ForgotPassword with correct values', async () => {
        const { sut, forgotPasswordSpy } = makeSut()
        await sut.handle({email: 'any_mail@mail.com'})
        expect(forgotPasswordSpy.email).toEqual('any_mail@mail.com')
    })

    test('Should call validation with correct values', async () => {
        const { sut, validationSpy } = makeSut()
        await sut.handle({email: 'any_mail@mail.com'})
        expect(validationSpy.input).toEqual({email: 'any_mail@mail.com'})
    })

    test('Should return 400 if Validation fails', async () => {
        const { sut, validationSpy } = makeSut()
        validationSpy.error = new Error()
        const httpResponse = await sut.handle({email: 'any_mail@mail.com'})
        expect(httpResponse).toEqual(badRequest(validationSpy.error))
    })

    test('Should return 404 if user not exists', async () => {
        const { sut, forgotPasswordSpy } = makeSut()
        forgotPasswordSpy.result = false
        const httpResponse = await sut.handle({email: 'any_mail@mail.com'})
        expect(httpResponse).toEqual(notFound(new Error('User does not exist')))
    })
})