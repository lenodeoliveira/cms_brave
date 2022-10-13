import { UpdateContentRepositorySpy } from '../../mocks/mock-db-content'
import { DbUpdateContent } from '@/data/usecases/content/db-update-content'
import { throwError } from '@/../tests/domain/test-helpers'
import { UpdateContentRepository } from '@/data/protocols/db/content/update-content-repository'


type SutTypes = {
  sut: DbUpdateContent
  updateContentRepositorySpy: UpdateContentRepositorySpy
}

const makeFakeData = (): UpdateContentRepository.Result => ({
    id: 'any_id',
    title: 'any_title',
    userId: 'any_id_user',
    slug: 'any_slug',
    image: 'link_url',
    body: 'any_content',
    published: 0,
})

const makeSut = (): SutTypes => {
    const updateContentRepositorySpy = new UpdateContentRepositorySpy()
    const sut = new DbUpdateContent(updateContentRepositorySpy)

    return {
        sut,
        updateContentRepositorySpy
    }
}

describe('UpdateContentRepository usecase', () => {
    test('Should call Update with correct values', async () => {
        const { sut, updateContentRepositorySpy } = makeSut()
        const data = makeFakeData()
        await sut.updateContent(data)
        expect(updateContentRepositorySpy.data).toEqual(data)
    })

    test('Should return true if it is possible to update content', async () => {
        const { sut, updateContentRepositorySpy } = makeSut()
        const data = makeFakeData()
        await sut.updateContent(data)
        expect(updateContentRepositorySpy.result).toBeTruthy()
    })

    test('Should throw if UpdateContentRepository throws', async () => {
        const { sut, updateContentRepositorySpy } = makeSut()
        jest.spyOn(updateContentRepositorySpy, 'update').mockImplementationOnce(throwError)
        const promise = sut.updateContent(makeFakeData())
        await expect(promise).rejects.toThrow()
    })
})