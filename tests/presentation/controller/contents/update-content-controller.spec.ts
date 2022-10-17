import { UpdateContentSpy, FindContentByIdSpy } from '../../mocks/mock-content'
import { UpdateContentController } from '@/presentation/controller/contents/update-content-controller'
import { throwError } from '@/../tests/domain/test-helpers'
import { forbidden, noContent, notFound, serverError } from '@/presentation/helpers/http/http-helpers'
import { SlugInUseError } from '@/presentation/errors/slug-in-use-error'

type SutTypes = {
  sut: UpdateContentController
  updateContentSpy: UpdateContentSpy
  findContentByIdSpy: FindContentByIdSpy
}

const makeFakeRequest = (): UpdateContentController.Result => ({
    id: 'any_id',
    title: 'any_title',
    userId: 'any_id_user',
    slug: 'any_slug',
    image: 'link_url',
    body: 'any_content',
    published: 0,
})

const makeSut = (): SutTypes => {
    const findContentByIdSpy = new FindContentByIdSpy()
    const updateContentSpy = new UpdateContentSpy()
    const sut = new UpdateContentController(updateContentSpy, findContentByIdSpy)
    return {
        sut,
        updateContentSpy,
        findContentByIdSpy
    }
}


describe('UpdateContent Controller', () => {
    test('Should call UpdateContent with correct values', async () => {
        const { sut, updateContentSpy } = makeSut()
        const request = makeFakeRequest()
        await sut.handle(request)
        expect(updateContentSpy.contentData).toEqual(request)
    })

    test('Should return 204 on success', async () => {
        const { sut } = makeSut()
        const httpRequest = await sut.handle(makeFakeRequest())
        expect(httpRequest).toEqual(noContent())
    })

    test('Should return the status code 404, if the content does not exist', async () => {
        const { sut, findContentByIdSpy } = makeSut()
        findContentByIdSpy.result = false
        const request = makeFakeRequest()
        const httpResponse = await sut.handle(request)
        expect(httpResponse).toEqual(notFound(new Error('content not exists')))
    })

    test('Should return 403 if a slug already exists', async () => {
        const { sut, updateContentSpy } = makeSut()
        updateContentSpy.result = true
        const request = makeFakeRequest()
        const httpResponse = await sut.handle(request)
        expect(httpResponse).toEqual(forbidden(new SlugInUseError()))
    })

    test('Should return 500 if UpdateContent throws', async () => {
        const { sut, updateContentSpy } = makeSut()
        jest.spyOn(updateContentSpy, 'updateContent').mockImplementationOnce(throwError)
        const httpResponse = await sut.handle(makeFakeRequest())
        expect(httpResponse).toEqual(serverError(new Error()))
    })
})