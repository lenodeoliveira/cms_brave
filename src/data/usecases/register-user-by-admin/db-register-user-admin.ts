import { Hasher } from '@/data/protocols/cryptography'
import { CheckAccountByEmailRepository } from '@/data/protocols/db/account'
import { RegisterUserByAdminRepository } from '@/data/protocols/db/register-users-by-admin/register-users-by-admin-repository'
import { MailProvider } from '@/data/protocols/providers/mail-provider'
import { RegisterUserByAdmin } from '@/domain/usecases/users/register-users'

export class DbRegisterUserByAdmin implements RegisterUserByAdmin {

    constructor(
      private readonly registerUserByAdminRepository: RegisterUserByAdminRepository,
      private readonly checkAccountByEmailRepository: CheckAccountByEmailRepository,
      private readonly hasher: Hasher,
      private readonly mailProvider: MailProvider
    ) {}

    async register (user: RegisterUserByAdmin.Params): Promise<boolean> {

        const exists = await this.checkAccountByEmailRepository.checkByEmail(user.email)
        let isValid = false

        if (!exists) {
            const hashedPassword = await this.hasher.hash(user.password)
            isValid = await this.registerUserByAdminRepository.registerUser({...user, password: hashedPassword})
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
        }
        return isValid
    }
}