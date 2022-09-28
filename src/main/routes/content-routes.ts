import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeAddContentsController } from '@/main/factories/controllers/content/add-content-controller-factory'
import { Router } from 'express'

export default (router: Router): void => {
    router.post('/contents', adaptRoute(makeAddContentsController()))
}
