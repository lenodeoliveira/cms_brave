import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeAddContentsController } from '@/main/factories/controllers/content/add-content-controller-factory'
import { Router } from 'express'
import { adaptMiddleware } from '../adapters/express-middleware-adapter'
import { makeAuthMiddleware } from '../factories/middlewares/auth-middleware-factory'

export default (router: Router): void => {
    const adminAuth = adaptMiddleware(makeAuthMiddleware('admin'))
    router.post('/contents', adminAuth, adaptRoute(makeAddContentsController()))
}
