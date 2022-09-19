import { AddAccount } from '@/domain/usecases/add-account'

export class AddAccountSpy implements AddAccount {
    params: AddAccount.Params 
    result = false

    async add (account: AddAccount.Params): Promise<AddAccount.Result> {
        this.params = account
        return this.result
    }
}