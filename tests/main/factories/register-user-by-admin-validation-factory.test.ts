import { makeRegisterAdminByAdminController } from '@/main/factories/controllers/register-user-by-admin/register-user-by-admin-controller-factory'
import { ValidationComposite, RequiredFieldValidation, EmailValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols/validation'
import { EmailValidatorAdapter } from '@/infra/validators/email-validator-adapter'

jest.mock('@/validation/validators/validation-composite')

describe('makeRegisterAdminByAdminValidation Factory', () => {
    test('Should call ValidationComposite with all validations', () => {
        makeRegisterAdminByAdminController()
        const validations: Validation[] = []
        for (const field of ['name', 'email', 'password', 'status', 'role']) {
            validations.push(new RequiredFieldValidation(field))
        }
        validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
        expect(ValidationComposite).toHaveBeenCalledWith(validations)
    })
})
