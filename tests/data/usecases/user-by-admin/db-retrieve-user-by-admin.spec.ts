import { DbRetrieveUserByAdmin } from '@/data/usecases/user-by-admin/db-retrieve-user-by-admin'
import { RetrieveUserByAdminRepositorySpy } from '../../mocks'
import { throwError } from '@/../tests/domain/test-helpers'

type SutTypes = {
  sut: DbRetrieveUserByAdmin
  retrieveUserByAdminRepositorySpy: RetrieveUserByAdminRepositorySpy
}

const makeSut = (): SutTypes => {
    const retrieveUserByAdminRepositorySpy = new RetrieveUserByAdminRepositorySpy()
    const sut = new DbRetrieveUserByAdmin(retrieveUserByAdminRepositorySpy)

    return {
        sut,
        retrieveUserByAdminRepositorySpy
    }
}


describe('DbRegisterUserByAdmin', () => {
    test('Should call RetrieveUserByAdminRepository with correct value', async () => {
        const { sut, retrieveUserByAdminRepositorySpy } = makeSut()
        await sut.retrieveUser('any_id')
        expect(retrieveUserByAdminRepositorySpy.id).toEqual('any_id')
    })

    test('Should throw if RetrieveUserByAdminRepository throws', async () => {
        const { sut, retrieveUserByAdminRepositorySpy } = makeSut()
        jest.spyOn(retrieveUserByAdminRepositorySpy, 'retrieveUser').mockImplementationOnce(throwError)
        const promise = sut.retrieveUser('any_id')
        await expect(promise).rejects.toThrow()
    })
})