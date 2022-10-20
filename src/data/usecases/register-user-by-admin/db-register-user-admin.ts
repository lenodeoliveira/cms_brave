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
        const isRegistered = this.registerUserByAdminRepository.registerUser(user)
        const exists = await this.checkAccountByEmailRepository.checkByEmail(user.email)
        await this.mailProvider.sendMail({
            to: {
                name: user.name,
                email: user.email
            },
            from: {
                name: 'Test mail',
                email: 'test@gmail.com'
            },
            subject: 'seja bem-vindo',
            body: '<p>Email enviado para teste!</p>'
        })
        return isRegistered
    }
}