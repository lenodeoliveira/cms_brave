export interface ResetUserPassword{
  resetPassword: (password: string) => Promise<string | boolean>
}
