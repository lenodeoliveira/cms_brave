import { CheckAccountByEmailRepository } from '@/data/protocols/db/account'
import { AddAccountRepository, LoadAccountByEmailRepository, UpdateAccessTokenRepository, LoadAccountByTokenRepository } from '@/data/protocols/db/account/'
import { AddAccount } from '@/domain/usecases/add-account'
import { User } from './entities/users'

export class AccountMysqlRepository implements AddAccountRepository, LoadAccountByEmailRepository, UpdateAccessTokenRepository, LoadAccountByTokenRepository, CheckAccountByEmailRepository {
    async add (data: AddAccount.Params): Promise<boolean> {
        await User.create(data.email)
        return true
    }
    async checkByEmail (email: string): Promise<boolean> {
        const user = await User.findAll({
            attributes: [
                'name'
            ],
            where: {
                email: email
            }
        })
        return user.length !== 0
    }

    async loadByEmail (email: string): Promise<LoadAccountByEmailRepository.Result> {
        const user = await User.findOne({
            where: {
                email: email
            }
        })
        return user
    }

    async updateAccessToken (id: string, token: string): Promise<void> {
        return null
    }

    async loadByToken (token: string, role?: string): Promise<LoadAccountByTokenRepository.Result> {
        return {
            id: 1
        }
    }
}