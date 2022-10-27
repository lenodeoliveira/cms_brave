import { DbResetPassword } from '@/data/usecases/reset-password/db-reset-password'
import { ResetPasswordRepositorySpy, TokenValidateRepositorySpy } from '../../mocks/mock-db-reset-password'

type SutType = {
  sut: DbResetPassword
  resetPasswordRepositorySpy: ResetPasswordRepositorySpy
  tokenValidateRepositorySpy: TokenValidateRepositorySpy
}

const makeSut = (): SutType => {
    const resetPasswordRepositorySpy = new ResetPasswordRepositorySpy()
    const tokenValidateRepositorySpy = new TokenValidateRepositorySpy()
    const sut = new DbResetPassword(resetPasswordRepositorySpy, tokenValidateRepositorySpy)

    return {
        sut,
        resetPasswordRepositorySpy,
        tokenValidateRepositorySpy,
    }
}

describe('DbResetPassword Usecase', () => {
    test('Should call ResetPasswordRepositorySpy with correct values', async () => {
        const { sut, resetPasswordRepositorySpy } = makeSut()

        await sut.resetPassword({
            email: 'any_mail@mail.com',
            code: 'any_code',
            password: 'any_password',
        })
        expect(resetPasswordRepositorySpy.data).toEqual({
            email: 'any_mail@mail.com',
            code: 'any_code',
            password: 'any_password',
        })
    })
})