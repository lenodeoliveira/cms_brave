import { RegisterUser } from '@/domain/usecases/users/register-users'

export class RegisterUserSpy implements RegisterUser {
    params: RegisterUser.Params 
    result = true

    async register (user: RegisterUser.Params): Promise<RegisterUser.Result> {
        this.params = user
        return this.result
    }
}
