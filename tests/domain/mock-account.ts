import { AddAccount } from '@/domain/usecases/add-account'
import { Authentication } from '@/domain/usecases/authentication'
import { RegisterUserByAdmin } from '@/domain/usecases/users/register-users'

export const mockAddAccountParams = (): AddAccount.Params => ({
    name: 'any_name',
    email:  'any_email@mail.com',
    password: 'any_password'
})

export const mockAuthenticationParams = (): Authentication.Params => ({
    email: 'any_email@mail.com',
    password:  'any_password'
})


export const mockRegisterUserByAdmin = (): RegisterUserByAdmin.Params => ({
    name: 'any_name',
    email:  'any_email@mail.com',
    password: 'any',
    status: 1,
    role: 'any_role'
})
