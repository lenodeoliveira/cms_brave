import { ResetPasswordRepository } from '@/data/protocols/db/reset-password/reset-password'
import { ResetUserPassword } from '@/domain/usecases/reset-password/reset-password'
import { TokenValidateRepository } from '@/data/protocols/db/token-validate/token-validate'

export class ResetPasswordRepositorySpy implements ResetPasswordRepository {

    data: ResetUserPassword.Params
    result = true

    async resetPassword (data: ResetUserPassword.Params): Promise<boolean> {
        this.data = data
        return this.result
    }
}

export class TokenValidateRepositorySpy implements TokenValidateRepository {

    data: TokenValidateRepository.Params
    result = null

    async validateToken (data: TokenValidateRepository.Params): Promise<string> {
        this.data = data
        return this.result
    }
}