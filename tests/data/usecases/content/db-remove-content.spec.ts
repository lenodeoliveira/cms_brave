import { RemoveContentRepositorySpy } from '../../mocks/mock-db-content'
import { DbRemoveContent } from '@/data/usecases/content/db-remove-content'


type SutTypes = {
  sut: DbRemoveContent
  removeContentRepositorySpy: RemoveContentRepositorySpy
}

const makeSut = (): SutTypes => {
    const removeContentRepositorySpy = new RemoveContentRepositorySpy()
    const sut = new DbRemoveContent(removeContentRepositorySpy)

    return {
        sut,
        removeContentRepositorySpy
    }
}

describe('RemoveContentRepository usecase', () => {
    test('Should call Remove with correct value', async () => {
        const { sut, removeContentRepositorySpy } = makeSut()
        const id = 'any_id'
        await sut.removeContent(id)
        expect(removeContentRepositorySpy.id).toEqual(id)
      
    })
})