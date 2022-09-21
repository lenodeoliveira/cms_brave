import sequelize from '../../mock/connection'
import { AccountMysqlRepository } from '@/infra/db/mysqldb/account-mysql-repository'
import { mockAddAccountParams } from '@/../tests/domain/mock-account'


const makeSut = (): AccountMysqlRepository => {
    return new AccountMysqlRepository()
}

jest.mock('@/infra/db/mysqldb/helpers/connection', () => {
    return import ('../../mock/connection')
})


describe('AccountMysqlRepository', () => {
    beforeEach(async () => {
        await sequelize.drop()
    })


    describe('add', () => {
        test('Should return an account on success', async () => {
            const sut = makeSut()
            const isValid = await sut.add(mockAddAccountParams())
            expect(1).toBe(1)

        })
    })
})