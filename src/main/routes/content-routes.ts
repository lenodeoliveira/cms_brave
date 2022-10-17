import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeAddContentsController } from '@/main/factories/controllers/content/add-content-controller-factory'
import { makeLoadContentsController } from '@/main/factories/controllers/content/load-contents-controller-factory'
import { makeLoadContentController } from '@/main/factories/controllers/content/load-content-controller-factory'
import { makeUpdateContentController } from '@/main/factories/controllers/content/update-content-controller-factory'
import { makeRemoveContentsController } from '@/main/factories/controllers/content/remove-content-controller-factory'
import { Router } from 'express'
import { adaptMiddleware } from '../adapters/express-middleware-adapter'
import { makeAuthMiddleware } from '../factories/middlewares/auth-middleware-factory'

export default (router: Router): void => {
    const adminAuth = adaptMiddleware(makeAuthMiddleware('admin'))
    router.get('/contents/:slug', adaptRoute(makeLoadContentController()))
    router.put('/contents/:id', adminAuth, adaptRoute(makeUpdateContentController()))
    router.delete('/contents/:id', adminAuth, adaptRoute(makeRemoveContentsController()))
    router.get('/contents', adaptRoute(makeLoadContentsController()))
    router.post('/contents', adminAuth, adaptRoute(makeAddContentsController()))
}
