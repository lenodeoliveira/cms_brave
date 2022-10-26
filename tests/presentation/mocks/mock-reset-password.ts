import { ResetUserPassword } from '@/domain/usecases/reset-password/reset-password'

export class ResetUserPasswordSpy implements  ResetUserPassword {
    password: string
    result = true
  
    async resetPassword(password: string): Promise<string | boolean> {
        this.password = password
        return this.result
    }
}