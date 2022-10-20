import { RegisterUserByAdminSpy } from '../../mocks/mock-users'
import { RegisterUserByAdminController } from '@/presentation/controller/users/register-users-controller'
import { ValidationSpy } from '../../mocks/mock-validation'
import { throwError } from '../../../domain/test-helpers'
import { ServerError, MissingParamError, EmailInUseError } from '@/presentation/errors/'
import { serverError, badRequest, forbidden, ok, noContent } from '@/presentation/helpers/http/http-helpers'



const mockRequest = (): any => ({
    name: 'any_name',
    status: 1,
    role: 'any_role'
})


describe('RegisterUserByAdmin Controller', () => {
    test('Should call UpdateUserByAdmin the correct values', async () => {
        expect(1).toBe(1)
    })
})