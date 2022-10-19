import { CheckAccountByEmailRepository } from '@/data/protocols/db/account'
import { RegisterUserByAdminRepository } from '@/data/protocols/db/register-users-by-admin/register-users-by-admin-repository'
import { MailProvider } from '@/data/protocols/providers/mail-provider'
import { RegisterUserByAdmin } from '@/domain/usecases/users/register-users'

export class DbRegisterUserByAdmin implements RegisterUserByAdmin {

    constructor(
      private readonly registerUserByAdminRepository: RegisterUserByAdminRepository,
      private readonly checkAccountByEmailRepository: CheckAccountByEmailRepository,
      private readonly mailProvider: MailProvider
    ) {}

    async register (user: RegisterUserByAdmin.Params): Promise<boolean> {
        await this.registerUserByAdminRepository.registerUser(user)
        return Promise.resolve(null)
    }
}