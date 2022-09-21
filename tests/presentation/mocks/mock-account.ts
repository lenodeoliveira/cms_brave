import { AddAccount } from '@/domain/usecases/add-account'
import { Authentication } from '@/domain/usecases/authentication'

export class AddAccountSpy implements AddAccount {
    params: AddAccount.Params 
    result = true

    async add (account: AddAccount.Params): Promise<AddAccount.Result> {
        this.params = account
        return this.result
    }
}

export class AuthenticationSpy implements Authentication {
    params: Authentication.Params
    result = {
        name: 'any_name',
        accessToken: 'any_token'
    }

    async auth (authentication: Authentication.Params): Promise<Authentication.Result> {
        this.params = authentication
        return this.result
    }
}