import {DbForgotPassword} from '@/data/usecases/forgot-password/db-forgot-password'
import {CheckAccountByEmailRepositorySpy} from '../../mocks'
import {ForgotPasswordRepositorySpy} from '../../mocks/mock-db-forgot-password'
import {mockAddAccountParams} from '../../../domain/mock-account'
import { throwError } from '@/../tests/domain/test-helpers'


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
    test('Should call ForgotPasswordRepository with correct value', async () => {
        const { sut, forgotPasswordRepositorySpy, checkAccountByEmailRepositorySpy } = makeSut()
        checkAccountByEmailRepositorySpy.result = true
        await sut.generateToken('any_mail@mail.com')
        expect(forgotPasswordRepositorySpy.email).toBe('any_mail@mail.com')
    })
  
    test('Should call checkAccountByEmailRepositorySpy with correct value', async () => {
        const { sut, checkAccountByEmailRepositorySpy } = makeSut()
        await sut.generateToken('any_mail@mail.com')
        expect(checkAccountByEmailRepositorySpy.email).toBe('any_mail@mail.com')
    })

    test('Should return true if CheckAccountByEmailRepository returns true', async () => {
        const { sut, checkAccountByEmailRepositorySpy } = makeSut()
        checkAccountByEmailRepositorySpy.result = true
        const isValid = await sut.generateToken('any_mail@mail.com')
        expect(isValid).toBe(true)
    })

    test('Should throw if ForgotPasswordRepository throws', async () => {
        const { sut, forgotPasswordRepositorySpy, checkAccountByEmailRepositorySpy } = makeSut()
        checkAccountByEmailRepositorySpy.result = true
        jest.spyOn(forgotPasswordRepositorySpy, 'generateToken').mockImplementationOnce(throwError)
        const promise = sut.generateToken('any_mail@gmail.com')
        await expect(promise).rejects.toThrow()
    })

})