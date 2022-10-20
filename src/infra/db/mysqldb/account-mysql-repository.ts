import { CheckAccountByEmailRepository, AddAccountRepository, LoadAccountByEmailRepository, LoadAccountByTokenRepository } from '@/data/protocols/db/account'
import { LoadAccountByByIdRepository } from '@/data/protocols/db/account/load-account-by-id-repository'
import { RegisterUserByAdminRepository } from '@/data/protocols/db/users-by-admin/register-users-by-admin-repository'
import { UpdateUserByAdminRepository } from '@/data/protocols/db/users-by-admin/update-users-by-admin-repository'
import { User } from './entities/users'

export class AccountMysqlRepository implements AddAccountRepository, LoadAccountByEmailRepository, CheckAccountByEmailRepository, RegisterUserByAdminRepository, LoadAccountByByIdRepository, UpdateUserByAdminRepository {
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

    async loadById (id: string): Promise<LoadAccountByByIdRepository.Result> {
        const user = await User.findOne({
            attributes: ['id', 'name', 'email', 'role', 'status'],
            where: {
                id: id
            }
        })

        return user
    }

    async updateUser (data: UpdateUserByAdminRepository.Params): Promise<boolean> {
        const response = await User.update({
            name: data.name,
            status: data.status,
            role: data.role,

        }, {
            where: {
                id: data.id
            }
        })
        return response ? true : false
    }
}
