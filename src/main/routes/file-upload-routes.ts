import { adaptRoute, /*adaptMulter as upload*/} from '@/main/adapters'
import { makeUploadController } from '@/main/factories/controllers/upload/upload-controller-factory'
import { makeRemoveUploadController } from '@/main/factories/controllers/upload/remove-upload-controller-factory'
import { adaptMiddleware } from '../adapters/express-middleware-adapter'
import { makeAuthMiddleware } from '../factories/middlewares/auth-middleware-factory'
import multer from 'multer'
import multerConfig from '@/main/config/multer'
import { Router } from 'express'
import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

const upload = multer(multerConfig)

export default (router: Router): void => {
    const adminAuth = adaptMiddleware(makeAuthMiddleware('admin'))
    router.post('/upload', adminAuth, upload.array('image', 1), adaptRoute(makeUploadController()))
    router.delete('/upload/:image', adminAuth, adaptRoute(makeRemoveUploadController()))
}


// Configuração de armazenamento
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, resolve(__dirname, '../../static'))
//     },
//     filename: function (req, file, cb) {
//         // Extração da extensão do arquivo original:
//         const extensaoArquivo = file.originalname.split('.')[1]

//         // Cria um código randômico que será o nome do arquivo
//         const novoNomeArquivo = 'test'

//         // Indica o novo nome do arquivo:
//         cb(null, `${novoNomeArquivo}.${extensaoArquivo}`)
//     }
// })

// const upload = multer({ storage })
// const maxFotos = 3

// export default (router: Router): void => {
//     const adminAuth = adaptMiddleware(makeAuthMiddleware('admin'))
//     router.post('/upload', adminAuth, upload.array('image', maxFotos), (req, res) => {
//         console.log('UPLOA ----->', req.files)
//         res.json({ ok: 'ok' })
//     })

// }