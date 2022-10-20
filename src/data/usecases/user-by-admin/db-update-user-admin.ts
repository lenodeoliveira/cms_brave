import { UpdateUserByAdmin } from '@/domain/usecases/users/update-user'
import { UpdateUserByAdminRepository } from '@/data/protocols/db/users-by-admin/update-users-by-admin-repository'
import { LoadAccountByEmailRepository } from '@/data/protocols/db/account/load-account-by-email-repository'

export class DbUpdateUserByAdmin implements UpdateUserByAdmin {
    constructor (
    private readonly updateUserByAdminRepository: UpdateUserByAdminRepository,
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository,
    ) {}
    async updateUserByAdmin (user: UpdateUserByAdmin.Params): Promise<boolean> {
        await this.updateUserByAdminRepository.updateUser(user)
        return Promise.resolve(null)
    }
  
}