import { RegisterUserByAdmin } from '@/domain/usecases/users/register-users'
import { UpdateUserByAdmin } from '@/domain/usecases/users/update-user'

export class RegisterUserByAdminSpy implements RegisterUserByAdmin {
    params: RegisterUserByAdmin.Params 
    result = true

    async register (user: RegisterUserByAdmin.Params): Promise<RegisterUserByAdmin.Result> {
        this.params = user
        return this.result
    }
}

export class UpdateUserByAdminSpy implements UpdateUserByAdmin {
    params: UpdateUserByAdmin.Params 
    result = true

    async registerUser (user: UpdateUserByAdmin.Params): Promise<UpdateUserByAdmin.Result> {
        this.params = user
        return this.result
    }
}
