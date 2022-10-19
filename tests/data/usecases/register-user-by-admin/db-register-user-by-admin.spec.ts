import { DbRegisterUserByAdmin } from '@/data/usecases/register-user-by-admin/db-register-user-admin'
import { RegisterUserByAdminRepositorySpy, MailProviderSpy } from '../../mocks'
import { mockRegisterUserByAdmin } from '../../../domain/mock-account'
import { CheckAccountByEmailRepositorySpy } from '../../mocks'
type SutTypes = {
  sut: DbRegisterUserByAdmin
  mailProviderSpy: MailProviderSpy
  registerUserByAdminRepositorySpy: RegisterUserByAdminRepositorySpy
  checkAccountByEmailRepositorySpy: CheckAccountByEmailRepositorySpy
}

const makeSut = (): SutTypes => {
    const registerUserByAdminRepositorySpy = new RegisterUserByAdminRepositorySpy()
    const checkAccountByEmailRepositorySpy = new CheckAccountByEmailRepositorySpy()
    const mailProviderSpy = new MailProviderSpy()
    const sut = new DbRegisterUserByAdmin(registerUserByAdminRepositorySpy, checkAccountByEmailRepositorySpy, mailProviderSpy)
    return {
        sut,
        mailProviderSpy,
        registerUserByAdminRepositorySpy,
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
})