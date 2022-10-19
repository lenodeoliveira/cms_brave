import { RegisterUserByAdmin } from '@/domain/usecases/users/register-users'

export class RegisterUserByAdminSpy implements RegisterUserByAdmin {
    params: RegisterUserByAdmin.Params 
    result = true

    async register (user: RegisterUserByAdmin.Params): Promise<RegisterUserByAdmin.Result> {
        this.params = user
        return this.result
    }
}
