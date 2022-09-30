import { DbLoadAccountByToken } from '@/data/usecases/load-account-by-token'
import { throwError } from '../../domain/test-helpers'
import { DecrypterSpy, LoadAccountByTokenRepositorySpy } from '../mocks'

type SutTypes = {
  sut: DbLoadAccountByToken
  decripterSpy: DecrypterSpy
  loadAccountByTokenRepositorySpy: LoadAccountByTokenRepositorySpy
}

const makeSut = (): SutTypes => {
    const decripterSpy = new DecrypterSpy()
    const loadAccountByTokenRepositorySpy = new LoadAccountByTokenRepositorySpy()
    const sut = new DbLoadAccountByToken(decripterSpy, loadAccountByTokenRepositorySpy)
  
    return {
        sut, 
        decripterSpy,
        loadAccountByTokenRepositorySpy
    }
}

describe('DbLoadAcccoutByToken UseCase', () => {
    test('Should call Decrypter with correct ciphertext', async () => {
        const { sut, decripterSpy } = makeSut()
        await sut.load('any_token')
        expect(decripterSpy.ciphertext).toBe('any_token')
    })

    test('Should return null if Decrypter returns null', async () => {
        const { sut, decripterSpy } = makeSut()
        decripterSpy.plaintext = null
        const account = await sut.load('any_token')
        expect(account).toBeNull()
    })

    test('Should call LoadAccountByTokenRepository with correct values', async () => {
        const { sut, loadAccountByTokenRepositorySpy } = makeSut()
        await sut.load('any_token', 'any_role')
        expect(loadAccountByTokenRepositorySpy.id).toBe('any')
        expect(loadAccountByTokenRepositorySpy.role).toBe('any_role')
    })

    test('Should return null if LoadAccountByTokenRepository returns null', async () => {
        const { sut, loadAccountByTokenRepositorySpy } = makeSut()
        loadAccountByTokenRepositorySpy.result = null
        const account = await sut.load('any_token', 'any_role')

        expect(account).toBeNull()
    })

    test('Should return an account on success', async () => {
        const { sut, loadAccountByTokenRepositorySpy } = makeSut()
        const account = await sut.load('any_token', 'any_role')
        expect(account).toEqual(loadAccountByTokenRepositorySpy.result)
    })

    test('Should throw if Decrypter throws', async () => {
        const { sut, decripterSpy } = makeSut()
        jest.spyOn(decripterSpy, 'decrypt').mockImplementationOnce(throwError)
        const account = await sut.load('any_token')
        expect(account).toBeNull()
    })

    test('Should throw if LoadAccountByTokenRepository throws', async () => {
        const { sut, loadAccountByTokenRepositorySpy } = makeSut()
        jest.spyOn(loadAccountByTokenRepositorySpy, 'loadByToken').mockImplementationOnce(throwError)
        const promise = sut.load('any_token')
        await expect(promise).rejects.toThrow()
    })
})
