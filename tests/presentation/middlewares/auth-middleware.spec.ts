import { forbidden } from '@/presentation/helpers/http/http-helpers'
import { AuthMiddleware } from '@/presentation/middlwares/auth-middleware'
import { AccessDeniedError } from '@/presentation/errors/access-denied-error'

describe('Auth Middeware', () => {
    test('Should return 403 if no x-access-token exists in headers', async () => {
        const sut = new AuthMiddleware()
        const httpResponse = await sut.handle({})
        expect(httpResponse).toEqual(forbidden(new AccessDeniedError()))
    })
})