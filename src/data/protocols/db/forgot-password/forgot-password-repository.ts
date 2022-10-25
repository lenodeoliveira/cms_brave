export interface ForgotPasswordRepository {
  generateToken: (email: string) => Promise<boolean>
}