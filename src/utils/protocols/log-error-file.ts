export interface LogErrorFile {
  log(stack: string): Promise<void>
}