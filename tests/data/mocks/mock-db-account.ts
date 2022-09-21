import { UpdateAccessTokenRepository,  } from '@/data/protocols/db/account/update-access-token-repository'
import { LoadAccountByTokenRepository,  } from '@/data/protocols/db/account/load-account-by-token-repository'
import { LoadAccountByEmailRepository  } from '@/data/protocols/db/account/load-account-by-email-repository'
import { AddAccountRepository } from '@/data/protocols/db/account/add-account-repository'
import { CheckAccountByEmailRepository } from '@/data/protocols/db/account/check-account-by-email-repository'

export class AddAccountRepositorySpy implements AddAccountRepository {
    params: AddAccountRepository.Params
    result = true

    async add (params: AddAccountRepository.Params): Promise<AddAccountRepository.Result> {
        this.params = params
        return this.result
    }
}

export class LoadAccountByEmailRepositorySpy implements LoadAccountByEmailRepository {
    email: string
    result = {
        id: 1,
        name: 'any_name',
        password: 'any_password'
    }

    async loadByEmail (email: string): Promise<LoadAccountByEmailRepository.Result> {
        this.email = email
        return this.result
    }
}

export class CheckAccountByEmailRepositorySpy implements CheckAccountByEmailRepository {
    email: string
    result = false

    async checkByEmail (email: string): Promise<CheckAccountByEmailRepository.Result> {
        this.email = email
        return this.result
    }
}

export class LoadAccountByTokenRepositorySpy implements LoadAccountByTokenRepository {
    token: string
    role: string
    result = {
        id: 1
    }

    async loadByToken (token: string, role?: string): Promise<LoadAccountByTokenRepository.Result> {
        this.token = token
        this.role = role
        return this.result
    }
}

export class UpdateAccessTokenRepositorySpy implements UpdateAccessTokenRepository {
    id: number
    token: string

    async updateAccessToken (id: number, token: string): Promise<void> {
        this.id = id
        this.token = token
    }
}
