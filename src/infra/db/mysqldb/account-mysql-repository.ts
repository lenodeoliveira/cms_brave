import { AddAccountRepository } from '@/data/protocols/db/account/add-account-repository'
import { AddAccount } from '@/domain/usecases/add-account'
export class AccountMysqlRepository implements AddAccountRepository{
    async add (data: AddAccount.Params): Promise<boolean> {
        let users: AddAccount.Params[]
        users.push(data)
        return true
    }
}