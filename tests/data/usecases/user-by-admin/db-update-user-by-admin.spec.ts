import { DbUpdateUserByAdmin } from '@/data/usecases/user-by-admin/db-update-user-admin'
import { LoadAccountByIdRepositorySpy, UpdateUserByAdminRepositorySpy } from '../../mocks'
import { mockUpdateUserByAdmin } from '../../../domain/mock-account'
import { throwError } from '@/../tests/domain/test-helpers'

type SutTypes = {
  sut: DbUpdateUserByAdmin
  updateUserByAdminRepositorySpy: UpdateUserByAdminRepositorySpy
  loadAccountByIdRepositorySpy: LoadAccountByIdRepositorySpy
}

const makeSut = (): SutTypes => {
    const updateUserByAdminRepositorySpy = new UpdateUserByAdminRepositorySpy()
    const loadAccountByIdRepositorySpy = new LoadAccountByIdRepositorySpy()
    const sut = new DbUpdateUserByAdmin(updateUserByAdminRepositorySpy, loadAccountByIdRepositorySpy)
    return {
        sut,
        updateUserByAdminRepositorySpy,
        loadAccountByIdRepositorySpy
    }
}

describe('DbUpdateUserByAdmin', () => {
    test('Should call UpdateUserByAdminRepository with correct values', async () => {
        const { sut, updateUserByAdminRepositorySpy } = makeSut()
        await sut.updateUserByAdmin(mockUpdateUserByAdmin())
        expect(updateUserByAdminRepositorySpy.params).toEqual(mockUpdateUserByAdmin())
    })

    test('Should throw if UpdateUserByAdminRepository throws', async () => {
        const { sut, updateUserByAdminRepositorySpy } = makeSut()
        jest.spyOn(updateUserByAdminRepositorySpy, 'updateUser').mockImplementationOnce(throwError)
        const promise = sut.updateUserByAdmin(mockUpdateUserByAdmin())
        await expect(promise).rejects.toThrow()
    })

    test('Should return user by id passed', async () => {
        const { sut, loadAccountByIdRepositorySpy } = makeSut()
        await sut.updateUserByAdmin(mockUpdateUserByAdmin())
        expect(loadAccountByIdRepositorySpy.result.name).toEqual(mockUpdateUserByAdmin().name)
    })

    test('Should throw if LoadAccountByIdRepositorySpy throws', async () => {
        const { sut, loadAccountByIdRepositorySpy } = makeSut()
        await sut.updateUserByAdmin(mockUpdateUserByAdmin())
        jest.spyOn(loadAccountByIdRepositorySpy, 'loadById').mockImplementationOnce(throwError)
        const promise = sut.updateUserByAdmin(mockUpdateUserByAdmin())
        await expect(promise).rejects.toThrow()
    })
})