import {ForgotPassword} from '@/domain/usecases/forgot-password/forgot-password'


export class ForgotPasswordSpy implements  ForgotPassword {
    email: string
    result = true
  
    async generateToken(email: string): Promise<boolean> {
        this.email = email
        return this.result
    }
}