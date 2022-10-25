import {ForgotPasswordRepository} from '@/data/protocols/db/forgot-password/forgot-password-repository'

export class ForgotPasswordRepositorySpy implements ForgotPasswordRepository {
    email: string
    result = true

    async generateToken (email: string): Promise<boolean> {
        this.email = email
        return this.result
    }
}