import { RemoveFile } from '@/domain/usecases/files/remove-file'

export class RemoveFileSpy implements RemoveFile {
    params: string
    removeFile (text: string): void {
        this.params = text
    }
}

