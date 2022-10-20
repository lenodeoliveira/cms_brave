import { CheckAccountByEmailRepository, AddAccountRepository, LoadAccountByEmailRepository, LoadAccountByTokenRepository } from '@/data/protocols/db/account'
import { RegisterUserByAdminRepository } from '@/data/protocols/db/register-users-by-admin/register-users-by-admin-repository'
import { RegisterUserByAdmin } from '@/domain/usecases/users/register-users'
import { User } from './entities/users'

export class AccountMysqlRepository implements AddAccountRepository, LoadAccountByEmailRepository, CheckAccountByEmailRepository, RegisterUserByAdminRepository {
    async add (data: AddAccountRepository.Params): Promise<boolean> {
        await User.create(data)
        return true
    }


    async registerUser (data: RegisterUserByAdminRepository.Params): Promise<boolean> {
        await User.create({
            name: data.name,
            email: data.email,
            password: data.password,
            role: data.role,
            status: data.status
        })
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
                email: email,
                status: 1,
            }
        })
        return user
    }

    async loadByToken (id: string, status: number, role?: string): Promise<LoadAccountByTokenRepository.Result> {

        const user = await User.findOne({
            attributes: ['id'],
            where: {
                id: id,
                status: status,
                role: role,

            }
        })
          
        return user
    }
}