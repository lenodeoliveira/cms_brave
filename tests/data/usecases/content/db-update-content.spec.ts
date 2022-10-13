import { UpdateContentRepositorySpy } from '../../mocks/mock-db-content'
import { DbUpdateContent } from '@/data/usecases/content/db-update-content'
import { throwError } from '@/../tests/domain/test-helpers'


type SutTypes = {
  sut: DbUpdateContent
  updateContentRepositorySpy: UpdateContentRepositorySpy
}

const makeSut = (): SutTypes => {
    const updateContentRepositorySpy = new UpdateContentRepositorySpy()
    const sut = new DbUpdateContent(updateContentRepositorySpy)

    return {
        sut,
        updateContentRepositorySpy
    }
}

describe('UpdateContentRepository usecase', () => {
    test('Should call Update with correct value', async () => {
        const { sut, updateContentRepositorySpy } = makeSut()
        const id = 'any_id'
        await sut.updateContent(id)
        expect(updateContentRepositorySpy.id).toEqual(id)
    })

    test('Should return true if it is possible to update content', async () => {
        const { sut, updateContentRepositorySpy } = makeSut()
        const id = 'any_id'
        await sut.updateContent(id)
        expect(updateContentRepositorySpy.result).toBeTruthy()
    })

    test('Should throw if UpdateContentRepository throws', async () => {
        const { sut, updateContentRepositorySpy } = makeSut()
        jest.spyOn(updateContentRepositorySpy, 'update').mockImplementationOnce(throwError)
        const promise = sut.updateContent('any_id')
        await expect(promise).rejects.toThrow()
    })
})