export interface UploadFile {
  upload: (input: UploadFile) => Promise<UploadFile.Output>
}

export namespace UploadFile {
  export type Input = { file: Buffer, fileName: string }
  export type Output = string
}