import { RetrieveUserByAdminController } from '@/presentation/controller/users/retrieve-user-by-admin-controller'
import { RetrieveUserByAdminSpy } from '../../mocks/mock-account'


type SutTypes = {
  sut: RetrieveUserByAdminController
  retrieveUserByAdminSpy: RetrieveUserByAdminSpy
}

const makeSut = (): SutTypes => {
    const retrieveUserByAdminSpy = new RetrieveUserByAdminSpy()
    const sut = new RetrieveUserByAdminController(retrieveUserByAdminSpy)
    return {
        sut,
        retrieveUserByAdminSpy
    }
}

describe('RetrieveUserByAdmin Controller', () => {
    test('Should call RetrieveUserByAdmin the correct values', async () => {
        const { sut, retrieveUserByAdminSpy } = makeSut()
        const retrieveUserSpy = jest.spyOn(retrieveUserByAdminSpy, 'retrieveUser')
        await sut.handle({ id: 'any_id' })
        expect(retrieveUserSpy).toHaveBeenCalledWith('any_id')
    })
})