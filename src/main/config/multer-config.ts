import multer from 'multer'
import crypt from 'crypto'
import path from 'path'

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'static'),
        filename(request, file, callback) {
            const hash = crypt.randomBytes(6).toString('hex')
            const fileName = `${hash}-${file.originalname}`
            callback(null, fileName)
        }
    })
}