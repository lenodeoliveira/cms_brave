import {ForgotPasswordController} from '@/presentation/controller/forgot-password/forgot-password-controller'
import {ForgotPasswordSpy} from '../../mocks/mock-forgot-password'
import {ValidationSpy} from '../../mocks/mock-validation'

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
})