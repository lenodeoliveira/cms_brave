import {ForgotPassword} from '@/domain/usecases/forgot-password/forgot-password'
import {CheckAccountByEmailRepository} from '@/data/protocols/db/account'
import {ForgotPasswordRepository} from '@/data/protocols/db/forgot-password/forgot-password-repository'

export class DbForgotPassword implements ForgotPassword {
    constructor (
      private readonly forgotPasswordRepository: ForgotPasswordRepository,
      private readonly checkAccountByEmailRepository: CheckAccountByEmailRepository
    ){}
    async generateToken (email: string): Promise<boolean> {
        await this.checkAccountByEmailRepository.checkByEmail(email)
        await this.forgotPasswordRepository.generateToken(email)
        return Promise.resolve(null)
    }
}