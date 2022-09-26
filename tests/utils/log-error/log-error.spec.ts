import { LogError } from '@/utils/log-error/log-error'
import fs from 'fs'

describe('LogErrorFile', () => {
    test('Should create a folder and file to add errors', async () => {
        const lgError = new LogError()
        await lgError.log('any-error')
        const dir = './error-system/'
        const file = './error-system/logs-error.txt'
        expect(fs.existsSync(dir)).toBeTruthy()
        expect(fs.existsSync(file)).toBeTruthy()
        fs.rmSync('./error-system/', { recursive: true, force: true })

    })
})


