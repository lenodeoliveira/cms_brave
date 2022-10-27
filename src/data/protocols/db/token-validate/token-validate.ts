export interface TokenValidateRepository {
  validateToken: (data: TokenValidateRepository.Params) => Promise<string>
}

export namespace TokenValidateRepository {
  export type Params = {
    passwordResetToken: string
    passwordResetExpires: Date
  }
}