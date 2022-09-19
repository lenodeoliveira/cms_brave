import { AddAccountSpy } from '../mocks/mock-account'
import { SignUpController } from '@/presentation/controller/signup-controller'
import { ValidationSpy } from '../mocks/mock-validation'
import { throwError } from '../../domain/test-helpers'
import { ServerError } from '@/presentation/errors/'
import { serverError } from '@/presentation/helpers/http/http-helpers'



const mockRequest = (): SignUpController.Request => ({
    name: 'any_name',
    email: 'any_mail@mail.com',
    password: 'any_password',
    passwordConfirmation: 'any_password'
})
type SutTypes = {
  sut: SignUpController
  addAccountSpy: AddAccountSpy
  validationSpy: ValidationSpy
}
const makeSut = (): SutTypes => {
    const addAccountSpy = new AddAccountSpy()
    const validationSpy = new ValidationSpy()
    const sut = new SignUpController(addAccountSpy, validationSpy)
    return {
        sut,
        addAccountSpy,
        validationSpy
    }
}

describe('SignUp Controller', () => {
    test('Should call AddAccount the correct values', async () => {
        const { sut, addAccountSpy } = makeSut()
        const addSpy = jest.spyOn(addAccountSpy, 'add')
        await sut.handle(mockRequest())
        expect(addSpy).toHaveBeenCalledWith({
            name: 'any_name',
            email: 'any_mail@mail.com',
            password: 'any_password'
        })
    })

    test('Should 500 if AddAccount throws', async () => {
        const { sut, addAccountSpy } = makeSut()
        jest.spyOn(addAccountSpy, 'add').mockImplementationOnce(throwError)
        const httpResponse = await sut.handle(mockRequest())
        expect(httpResponse).toEqual(serverError(new ServerError(null)))
    })
})