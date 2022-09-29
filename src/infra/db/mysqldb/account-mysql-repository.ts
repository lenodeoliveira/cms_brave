import { CheckAccountByEmailRepository, AddAccountRepository, LoadAccountByEmailRepository, LoadAccountByTokenRepository } from '@/data/protocols/db/account'
import { User } from './entities/users'

export class AccountMysqlRepository implements AddAccountRepository, LoadAccountByEmailRepository, CheckAccountByEmailRepository {
    async add (data: AddAccountRepository.Params): Promise<boolean> {
        await User.create(data)
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

    async loadByToken (id: string, role?: string): Promise<LoadAccountByTokenRepository.Result> {

        const user = await User.findOne({
            attributes: ['id'],
            where: {
                id: id,
                role: role,

            }
        })
          
        return user
    }
}