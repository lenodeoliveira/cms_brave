import {DbForgotPassword} from '@/data/usecases/forgot-password/db-forgot-password'
import {CheckAccountByEmailRepositorySpy} from '../../mocks'
import {ForgotPasswordRepositorySpy} from '../../mocks/mock-db-forgot-password'


type SutTypes = {
  sut: DbForgotPassword
  forgotPasswordRepositorySpy: ForgotPasswordRepositorySpy
  checkAccountByEmailRepositorySpy: CheckAccountByEmailRepositorySpy
}

const makeSut = (): SutTypes => {
    const forgotPasswordRepositorySpy = new ForgotPasswordRepositorySpy()
    const checkAccountByEmailRepositorySpy = new CheckAccountByEmailRepositorySpy()
    const sut = new DbForgotPassword(forgotPasswordRepositorySpy, checkAccountByEmailRepositorySpy)
    return {
        sut,
        forgotPasswordRepositorySpy,
        checkAccountByEmailRepositorySpy
    }
}

describe('DbForgotPassword Usecase', () => {
    test('', async () => {
        const { sut, forgotPasswordRepositorySpy } = makeSut()
        await sut.generateToken('any_mail@mail.com')
        expect(forgotPasswordRepositorySpy.email).toBe('any_mail@mail.com')
    })
})