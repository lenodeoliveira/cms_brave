import {ForgotPassword} from '@/domain/usecases/forgot-password/forgot-password'
import {CheckAccountByEmailRepository} from '@/data/protocols/db/account'
import {ForgotPasswordRepository} from '@/data/protocols/db/forgot-password/forgot-password-repository'
import { MailProvider } from '@/data/protocols/providers/mail-provider'

export class DbForgotPassword implements ForgotPassword {
    constructor (
      private readonly forgotPasswordRepository: ForgotPasswordRepository,
      private readonly checkAccountByEmailRepository: CheckAccountByEmailRepository,
      private readonly mailProvider: MailProvider
    ){}
    async generateToken (email: string, host?: string): Promise<ForgotPassword.Result> {
        const exists = await this.checkAccountByEmailRepository.checkByEmail(email)
        let user: ForgotPassword.Result
        if(exists) {

            user = await this.forgotPasswordRepository.generateToken(email)

            const replacements = {
                email: email,
                link: `http://${host}/api/reset-password?code=${user.passwordResetToken}&email=${email}`
            }

            await this.mailProvider.sendMail({
                to: {
                    name: email,
                    email: email
                },
                from: {
                    name: 'Test mail',
                    email: 'test@gmail.com'
                },
                subject: 'seja bem-vindo',
                body: '<p>Olá {{email}}, para resetar sua senha acesse o link  <a href="{{link}}">Aqui</a>. Você tem uma hora.</p>',
                replacements
            })
        }

        return user
    }
}
