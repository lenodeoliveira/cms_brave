import { Validation } from '@/presentation/protocols/validation'

export class FileValidation implements Validation {

    validate (input: any): Error {
        const maxSize =  2 * 1024 * 1024
        const allowedMimes = [
            'image/jpeg',
            'image/png',
        ]
        if (input?.size > maxSize) {
            new Error('Invalid size')
        }

        if (!allowedMimes.includes(input?.mimetype)) {
            return new Error('Invalid type')
        }
    }


}
