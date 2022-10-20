import { UpdateUserByAdminSpy } from '../../mocks/mock-users'
import { UpdateUserByAdminController } from '@/presentation/controller/users/update-users-controller'
import { ValidationSpy } from '../../mocks/mock-validation'
import { throwError } from '../../../domain/test-helpers'
import { ServerError, MissingParamError, EmailInUseError } from '@/presentation/errors/'
import { serverError, badRequest, forbidden, ok, noContent } from '@/presentation/helpers/http/http-helpers'



type SutTypes = {
  sut: UpdateUserByAdminController
  updateUserSpy: UpdateUserByAdminSpy
  validationSpy: ValidationSpy
}

const mockRequest = (): any => ({
    name: 'any_name',
    status: 1,
    role: 'any_role'
})

const makeSut = (): SutTypes => {
    const updateUserSpy = new UpdateUserByAdminSpy()
    const validationSpy = new ValidationSpy()
    const sut = new UpdateUserByAdminController(updateUserSpy, validationSpy)
    return {
        sut,
        updateUserSpy,
        validationSpy
    }
}


describe('RegisterUserByAdmin Controller', () => {
    test('Should call UpdateUserByAdmin the correct values', async () => {
        const { sut, updateUserSpy } = makeSut()
        const updateSpy = jest.spyOn(updateUserSpy, 'registerUser')
        await sut.handle(mockRequest())
        expect(updateSpy).toHaveBeenCalledWith({
            name: 'any_name',
            status: 1,
            role: 'any_role'
        })
    })

    test('Should return 400 if Validation returns an error', async () => {
        const { sut, validationSpy } = makeSut()
        jest.spyOn(validationSpy, 'validate').mockReturnValueOnce(new MissingParamError('any_field'))
        const httpResponse = await sut.handle(mockRequest())
        expect(httpResponse).toEqual(badRequest(new MissingParamError('any_field')))
    })

    test('Should 500 if UpdateUserByAdmin throws', async () => {
        const { sut, updateUserSpy } = makeSut()
        jest.spyOn(updateUserSpy, 'registerUser').mockImplementationOnce(throwError)
        const httpResponse = await sut.handle(mockRequest())
        expect(httpResponse).toEqual(serverError(new ServerError(null)))
    })
})