import { AddAccountSpy } from '../mocks/mock-account'
import { SignUpController } from '@/presentation/controller/signup-controller'



const mockRequest = (): SignUpController.Request => ({
    name: 'any_name',
    email: 'any_mail@mail.com',
    password: 'any_password',
    passwordConfirmation: 'any_password'
})
type SutTypes = {
  sut: SignUpController
  addAccountSpy: AddAccountSpy
}
const makeSut = (): SutTypes => {
    const addAccountSpy = new AddAccountSpy()
    const sut = new SignUpController(addAccountSpy)
    return {
        sut,
        addAccountSpy
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
})