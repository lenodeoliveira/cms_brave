import {ForgotPassword} from '@/domain/usecases/forgot-password/forgot-password'
import {CheckAccountByEmailRepository} from '@/data/protocols/db/account'
import {ForgotPasswordRepository} from '@/data/protocols/db/forgot-password/forgot-password-repository'

export class DbForgotPassword implements ForgotPassword {
    constructor (
      private readonly forgotPasswordRepository: ForgotPasswordRepository,
      private readonly checkAccountByEmailRepository: CheckAccountByEmailRepository
    ){}
    async generateToken (email: string): Promise<boolean> {
        const exists = await this.checkAccountByEmailRepository.checkByEmail(email)
        let isValid = false
        if(exists) {
            isValid = await this.forgotPasswordRepository.generateToken(email)
        }
        return isValid
    }
}