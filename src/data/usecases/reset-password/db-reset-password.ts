import { ResetPasswordRepository } from '@/data/protocols/db/reset-password/reset-password'
import { TokenValidateRepository } from '@/data/protocols/db/token-validate/token-validate'
import { LoadAccountByEmailRepository } from '@/data/protocols/db/account/load-account-by-email-repository'
import { ResetUserPassword } from '@/domain/usecases/reset-password/reset-password'

export class DbResetPassword implements ResetUserPassword {
    constructor(
      private readonly resetPasswordRepository: ResetPasswordRepository,
      private readonly tokenValidateRepository: TokenValidateRepository,
      private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
    ){}

    async resetPassword (params: ResetUserPassword.Params): Promise<string | boolean> {
        await this.resetPasswordRepository.resetPassword(params)
        return Promise.resolve(null)
    }
  
} 