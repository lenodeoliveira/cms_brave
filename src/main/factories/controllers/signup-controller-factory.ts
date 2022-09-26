import { SignUpController } from '@/presentation/controller/signup-controller'
import { DbAddAccount } from '@/data/usecases/db-add-account' 
import { AccountMysqlRepository } from '@/infra/db/mysqldb/account-mysql-repository' 
import { BcryptAdapter } from '@/infra/cryptography/bcrypt-adapter' 
import { makeSignUpValidation } from './signup-validation-factory'
import { Controller } from '@/presentation/protocols/controller'
import { DbAuthentication } from '@/data/usecases/db-authentication'
import { JwtAdapter } from '@/infra/cryptography'
import env from '@/main/config/env'
import { LogControllerDecorator } from '@/main/decorators/log'

export const makeSignUpController = (): Controller => {
    const secret = env.jwtSecret
    const salt = 12
    const accountMysqlRepository = new AccountMysqlRepository()
    const bcryptAdapter = new BcryptAdapter(salt)
    const jwtAdapter = new JwtAdapter(secret)
    const dbAuthentication = new DbAuthentication(accountMysqlRepository, bcryptAdapter, jwtAdapter, accountMysqlRepository)
    const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMysqlRepository, accountMysqlRepository)
    const singUpController = new SignUpController(dbAddAccount, makeSignUpValidation(), dbAuthentication)
    return new LogControllerDecorator(singUpController)
}