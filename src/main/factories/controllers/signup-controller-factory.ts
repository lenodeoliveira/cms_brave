// import { SignUpController } from '@/presentation/controller/signup-controller'
// import { EmailValidatorAdapter } from '@/infra/validators/email-validator-adapter'
// import { DbAddAccount } from '@/data/usecases/db-add-account' 
// import { AccountMysqlRepository } from '@/infra/db/mysqldb/account-mysql-repository' 
// import { BcryptAdapter } from '@/infra/cryptography/bcrypt-adapter' 
// import { makeSignUpValidation } from './signup-validation-factory'
// import { Controller } from '@/presentation/protocols/controller'

// export const makeSignUpController = (): Controller => {
//     const salt = 12
//     const accountMysqlRepository = new AccountMysqlRepository()
//     const bcryptAdapter = new BcryptAdapter(salt)
//     const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMysqlRepository)
//     const controller = new SignUpController(, dbAddAccount, makeSignUpValidation())
//     return controller
// }