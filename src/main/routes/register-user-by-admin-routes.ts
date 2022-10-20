import { Router } from 'express'
import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { adaptMiddleware } from '../adapters/express-middleware-adapter'
import { makeAuthMiddleware } from '../factories/middlewares/auth-middleware-factory'
import { makeRegisterAdminByAdminController } from '@/main/factories/controllers/register-user-by-admin/register-user-by-admin-controller-factory'

export default (router: Router): void => {
    const adminAuth = adaptMiddleware(makeAuthMiddleware(1, 'admin'))
    router.post('/register/auth', adminAuth, adaptRoute(makeRegisterAdminByAdminController()))
}