import { ResetUserPasswordSpy } from '../../mocks/mock-reset-password'
import { ResetPasswordController } from '@/presentation/controller/reset-password/reset-password-controller'
import { ValidationSpy } from '../../mocks/mock-validation'

type SutType = {
  sut: ResetPasswordController
  validationSpy: ValidationSpy
  resetUserPasswordSpy: ResetUserPasswordSpy
}


const makeSut = (): SutType => {
    const resetUserPasswordSpy = new ResetUserPasswordSpy()
    const validationSpy = new ValidationSpy()
    const sut = new ResetPasswordController(resetUserPasswordSpy, validationSpy)

    return {
        sut, 
        resetUserPasswordSpy,
        validationSpy
    }
}

const mockRequest = (): ResetPasswordController.Request => ({
    email: 'any_mail@mail.com',
    code: 'any_code',
    password: 'any_password',
    passwordConfirmation: 'any_password'
}) 

describe('ResetPasswordController', () => {
    test('Should call ResetUserPassword the correct values', async () => {
        const { sut, resetUserPasswordSpy } = makeSut()
        const resetPasswordSpy = jest.spyOn(resetUserPasswordSpy, 'resetPassword')
        await sut.handle(mockRequest())
        expect(resetPasswordSpy).toHaveBeenCalledWith({
            email: 'any_mail@mail.com',
            code: 'any_code',
            password: 'any_password',
        })
    })
})