import { ResetPasswordRepository } from '@/data/protocols/db/reset-password/reset-password'
import { TokenValidateRepository } from '@/data/protocols/db/token-validate/token-validate'
import { ResetUserPassword } from '@/domain/usecases/reset-password/reset-password'

export class DbResetPassword implements ResetUserPassword {
    constructor(
      private readonly resetPasswordRepository: ResetPasswordRepository,
      private readonly tokenValidateRepository: TokenValidateRepository
    ){}

    async resetPassword (params: ResetUserPassword.Params): Promise<string | boolean> {
        await this.resetPasswordRepository.resetPassword(params)
        return Promise.resolve(null)
    }
  
} 