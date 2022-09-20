import { CheckAccountByEmailRepository } from '@/data/protocols/db/account'
import { AddAccountRepository, LoadAccountByEmailRepository, UpdateAccessTokenRepository, LoadAccountByTokenRepository } from '@/data/protocols/db/account/'
import { AddAccount } from '@/domain/usecases/add-account'
export class AccountMysqlRepository implements AddAccountRepository, LoadAccountByEmailRepository, UpdateAccessTokenRepository, LoadAccountByTokenRepository, CheckAccountByEmailRepository {
    async add (data: AddAccount.Params): Promise<boolean> {
        console.log('AccountMysqlRepository', data)
        return true
    }
    async checkByEmail (email: string): Promise<boolean> {
        return false
    }

    async loadByEmail (email: string): Promise<LoadAccountByEmailRepository.Result> {
        return {
            id: 1,
            name: 'John Doe',
            password: 'password'  
        }
    }

    async updateAccessToken (id: number, token: string): Promise<void> {
        return null
    }

    async loadByToken (token: string, role?: string): Promise<LoadAccountByTokenRepository.Result> {
        return {
            id: 1
        }
    }
}