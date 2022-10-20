import { DbUpdateUserByAdmin } from '@/data/usecases/user-by-admin/db-update-user-admin'
import { UpdateUserByAdminRepositorySpy, LoadAccountByEmailRepositorySpy } from '../../mocks'
import { mockUpdateUserByAdmin } from '../../../domain/mock-account'
import { throwError } from '@/../tests/domain/test-helpers'

type SutTypes = {
  sut: DbUpdateUserByAdmin
  updateUserByAdminRepositorySpy: UpdateUserByAdminRepositorySpy
  loadAccountByEmailRepositorySpy: LoadAccountByEmailRepositorySpy
}

const makeSut = (): SutTypes => {
    const updateUserByAdminRepositorySpy = new UpdateUserByAdminRepositorySpy()
    const loadAccountByEmailRepositorySpy = new LoadAccountByEmailRepositorySpy()
    const sut = new DbUpdateUserByAdmin(updateUserByAdminRepositorySpy, loadAccountByEmailRepositorySpy)
    return {
        sut,
        updateUserByAdminRepositorySpy,
        loadAccountByEmailRepositorySpy
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
})