import { DbRegisterUserByAdmin } from '@/data/usecases/user-by-admin/db-register-user-admin'
import { RegisterUserByAdminRepositorySpy, MailProviderSpy, HasherSpy } from '@/tests/data/mocks'
import { mockRegisterUserByAdmin } from '@/tests/domain/mock-account'
import { CheckAccountByEmailRepositorySpy } from '@/tests/data/mocks'
import { throwError } from '@/tests/domain/test-helpers'

type SutTypes = {
  sut: DbRegisterUserByAdmin
  mailProviderSpy: MailProviderSpy
  hasherSpy: HasherSpy
  registerUserByAdminRepositorySpy: RegisterUserByAdminRepositorySpy
  checkAccountByEmailRepositorySpy: CheckAccountByEmailRepositorySpy
}

const makeSut = (): SutTypes => {
    const registerUserByAdminRepositorySpy = new RegisterUserByAdminRepositorySpy()
    const checkAccountByEmailRepositorySpy = new CheckAccountByEmailRepositorySpy()
    const hasherSpy = new HasherSpy()
    const mailProviderSpy = new MailProviderSpy()
    const sut = new DbRegisterUserByAdmin(registerUserByAdminRepositorySpy, checkAccountByEmailRepositorySpy, hasherSpy, mailProviderSpy)
    return {
        sut,
        mailProviderSpy,
        registerUserByAdminRepositorySpy,
        hasherSpy,
        checkAccountByEmailRepositorySpy
    }
}

describe('DbRegisterUserByAdmin', () => {
    test('Should call RegisterUserByAdminRepository with correct values', async () => {
        const { sut, registerUserByAdminRepositorySpy } = makeSut()
        await sut.register(mockRegisterUserByAdmin())
        expect(registerUserByAdminRepositorySpy.params).toEqual(mockRegisterUserByAdmin())
    })

    test('Should return true on success', async () => {
        const { sut } = makeSut()
        const response = await sut.register(mockRegisterUserByAdmin())
        expect(response).toBeTruthy()
    })

    test('Should throw if RegisterUserByAdminRepository throws', async () => {
        const { sut, registerUserByAdminRepositorySpy } = makeSut()
        jest.spyOn(registerUserByAdminRepositorySpy, 'registerUser').mockImplementationOnce(throwError)
        const promise = sut.register(mockRegisterUserByAdmin())
        await expect(promise).rejects.toThrow()
    })

    test('Should call mailProviderSpy with correct values', async () => {
        const { sut, mailProviderSpy } = makeSut()
        await sut.register(mockRegisterUserByAdmin())
        expect(mailProviderSpy.message).toEqual({
            to: {
                name: mockRegisterUserByAdmin().name,
                email: mockRegisterUserByAdmin().email
            },
            from: {
                name: 'Test mail',
                email: 'test@gmail.com'
            },
            subject: 'seja bem-vindo',
            body: '<p>Bem-vindo ao gerenciador de conte??do da Brave!</p>'
        })
    })

    test('Should call CheckAccountByEmailRepository with correct email', async () => {
        const { sut, checkAccountByEmailRepositorySpy } = makeSut()
        const addRegisterUser = mockRegisterUserByAdmin()
        await sut.register(addRegisterUser)
        expect(checkAccountByEmailRepositorySpy.email).toBe(addRegisterUser.email)
    })

    test('Should return false if RegisterUserByAdminRepository returns false', async () => {
        const { sut, registerUserByAdminRepositorySpy } = makeSut()
        registerUserByAdminRepositorySpy.result = false
        const isValid = await sut.register(mockRegisterUserByAdmin())
        expect(isValid).toBe(false)
    })

    test('Should return false if CheckAccountByEmailRepository returns true', async () => {
        const { sut, checkAccountByEmailRepositorySpy } = makeSut()
        checkAccountByEmailRepositorySpy.result = true
        const isValid = await sut.register(mockRegisterUserByAdmin())
        expect(isValid).toBe(false)
    })


    test('Should call Hasher with correct plaintext', async () => {
        const { sut, hasherSpy } = makeSut()
        const addRegisterUser = mockRegisterUserByAdmin()
        await sut.register(addRegisterUser)
        expect(hasherSpy.plaintext).toBe(addRegisterUser.password)
    })

    test('Should throw if Hasher throws', async () => {
        const { sut, hasherSpy } = makeSut()
        jest.spyOn(hasherSpy, 'hash').mockImplementationOnce(throwError)
        const promise = sut.register(mockRegisterUserByAdmin())
        await expect(promise).rejects.toThrow()
    })
})