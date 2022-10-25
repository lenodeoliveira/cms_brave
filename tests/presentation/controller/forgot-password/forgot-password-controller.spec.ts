import {ForgotPasswordController} from '@/presentation/controller/forgot-password/forgot-password-controller'
import {ForgotPasswordSpy} from '../../mocks/mock-forgot-password'

type SutTypes = {
  sut: ForgotPasswordController
  forgotPasswordSpy: ForgotPasswordSpy
}

const makeSut = (): SutTypes => {
    const forgotPasswordSpy = new ForgotPasswordSpy()
    const sut = new ForgotPasswordController(forgotPasswordSpy)
  
    return {
        sut,
        forgotPasswordSpy
    }
}

describe('ForgotPassWordController', () => {
    test('Should call ForgotPassword with correct values', async () => {
        const { sut, forgotPasswordSpy } = makeSut()
        await sut.handle({email: 'any_mail@mail.com'})
        expect(forgotPasswordSpy.email).toEqual('any_mail@mail.com')
    })
})