import fs from 'fs'
import { LogErrorFile } from '../protocols/log-error-file'

export class LogError implements LogErrorFile {
    private dirName = './error-system/'
    private fileName = 'logs-error.txt'

    async log(stack: string): Promise<void> {
        this.createFolder()
        await this.createFile(stack)
    }

    private async createFile(text: string): Promise<void> {
        fs.appendFile(`${this.dirName}${this.fileName}`, `${text} - ${new Date()} \r`, (err) => {
            if (err) { console.error(err) }
        })
    }

    private createFolder(): void {
        if (!fs.existsSync(this.dirName)) {
            fs.mkdirSync(this.dirName, {
                recursive: true
            })
        }
    }
}