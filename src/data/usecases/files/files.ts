import { RemoveFile } from '@/presentation/protocols/remove-file'
import { promisify } from 'util'
import fs from 'fs'
import path from 'path'

export class Files implements RemoveFile {
    removeFile(text: string): void {
        promisify(fs.unlink)(path.resolve(__dirname, '..', '..', '..','static', text))
    }
}