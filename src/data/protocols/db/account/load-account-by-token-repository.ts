
export interface LoadAccountByTokenRepository {
  loadByToken: (id: string, role?: string) => Promise<LoadAccountByTokenRepository.Result>
}
export namespace LoadAccountByTokenRepository {
  export type Result = {
    id: string
    name: string
    email: string
  }
}
