import { throwError } from '@/../tests/domain/test-helpers'
import { AddContentSpy } from '@/../tests/presentation/mocks/mock-content'
import { DbAddContent } from '@/data/usecases/content/db-add-content'
import { AddContent } from '@/domain/usecases/content/add-content'

type SutType = {
  sut: DbAddContent
  addContentRepositorySpy: AddContentSpy
}

const makeFakeContent = (): AddContent.Params =>({
    title: 'any_title',
    userId: 'any_id_user',
    slug: 'any_slug',
    image: 'link_url',
    body: 'any_content',
    published: 0,
})


const makeSut = (): SutType => {
    const addContentRepositorySpy = new AddContentSpy()
    const sut = new DbAddContent(addContentRepositorySpy)
    return {
        sut,
        addContentRepositorySpy
    }
}

describe('DbAddContent Usecase', () => {
    test('Should call AddContentRepository with correct values', async () => {
        const { sut, addContentRepositorySpy } = makeSut()
        await sut.add(makeFakeContent())
        expect(addContentRepositorySpy.params).toEqual(makeFakeContent())
    })

    test('Should throw if AddContentRepository throws', async () => {
        const { sut, addContentRepositorySpy } = makeSut()
        jest.spyOn(addContentRepositorySpy, 'add').mockImplementationOnce(throwError)
        const promise = sut.add(makeFakeContent())
        await expect(promise).rejects.toThrow()
    })
})