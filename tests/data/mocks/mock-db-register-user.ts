import { RegisterUserByAdminRepository } from '@/data/protocols/db/users-by-admin/register-users-by-admin-repository'

export class RegisterUserByAdminRepositorySpy implements RegisterUserByAdminRepository {
    params: RegisterUserByAdminRepository.Params 
    result = true

    async registerUser (data: RegisterUserByAdminRepository.Params): Promise<RegisterUserByAdminRepository.Result> {
        this.params = data
        return this.result
    }
}
