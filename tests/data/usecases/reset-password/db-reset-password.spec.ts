import { DbResetPassword } from '@/data/usecases/reset-password/db-reset-password'
import { HasherSpy, LoadAccountByEmailRepositorySpy } from '../../mocks'
import { ResetPasswordRepositorySpy, TokenValidateRepositorySpy } from '../../mocks/mock-db-reset-password'
import MockDate from 'mockdate'
import { mockLoadAccountByEmail } from '@/../tests/domain/mock-account'
import { throwError } from '@/../tests/domain/test-helpers'

type SutType = {
  sut: DbResetPassword
  resetPasswordRepositorySpy: ResetPasswordRepositorySpy
  tokenValidateRepositorySpy: TokenValidateRepositorySpy,
  loadAccountByEmailRepositorySpy: LoadAccountByEmailRepositorySpy,
  hasherSpy: HasherSpy
}

const makeSut = (): SutType => {
    const resetPasswordRepositorySpy = new ResetPasswordRepositorySpy()
    const tokenValidateRepositorySpy = new TokenValidateRepositorySpy()
    const loadAccountByEmailRepositorySpy = new LoadAccountByEmailRepositorySpy()
    const  hasherSpy = new HasherSpy()
    const sut = new DbResetPassword(resetPasswordRepositorySpy, tokenValidateRepositorySpy, loadAccountByEmailRepositorySpy, hasherSpy)

    return {
        sut,
        resetPasswordRepositorySpy,
        tokenValidateRepositorySpy,
        loadAccountByEmailRepositorySpy,
        hasherSpy

    }
}

describe('DbResetPassword Usecase', () => {
    beforeAll(() => {
        MockDate.set(new Date())
    })

    afterAll(() => {
        MockDate.reset()
    })


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
            password: 'any',
        })
    })

    test('Should throw if ResetPasswordRepository throws', async () => {
        const { sut, resetPasswordRepositorySpy } = makeSut()
        jest.spyOn(resetPasswordRepositorySpy, 'resetPassword').mockImplementationOnce(throwError)
        const promise = sut.resetPassword({
            email: 'any_mail@mail.com',
            code: 'any_code',
            password: 'any_password',
        })
        await expect(promise).rejects.toThrow()
    })

    test('Should throw if Hasher throws', async () => {
        const { sut, hasherSpy } = makeSut()
        jest.spyOn(hasherSpy, 'hash').mockImplementationOnce(throwError)
        const promise = sut.resetPassword({
            email: 'any_mail@mail.com',
            code: 'any_code',
            password: 'any_password',
        })
        await expect(promise).rejects.toThrow()
    })
})