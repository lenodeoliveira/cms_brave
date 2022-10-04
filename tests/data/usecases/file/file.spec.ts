import { Files } from '@/data/usecases/files/files'
import fs from 'fs'

jest.mock('fs', () => ({
    unlink (): boolean {
        return true
    }
}))


const makeSut = (): Files => {
    return new Files()
}

describe('File Usecase', () => {
    test('Should be possible to successfully remove an image', () => {
        const sut = makeSut()
        const res = sut.removeFile('any_image')
        expect(res).toBeFalsy()
    })
})
