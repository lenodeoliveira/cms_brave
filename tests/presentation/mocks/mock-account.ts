import { AddAccount } from '@/domain/usecases/add-account'
import { Authentication } from '@/domain/usecases/authentication'
import { LoadAccountByToken } from '@/domain/usecases/load-account-by-token'

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

export class LoadAccountByTokenSpy implements LoadAccountByToken {
    accessToken: string
    role: string
    status: number
    result = {
        id: 'any_id'
    }

    async load (accessToken: string, status: number, role?: string): Promise<LoadAccountByToken.Result> {
        this.accessToken = accessToken
        this.role = role
        this.status = status
        return this.result
    }
}