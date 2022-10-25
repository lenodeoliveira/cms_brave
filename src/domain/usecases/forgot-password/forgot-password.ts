export interface ForgotPassword {
  generateToken: (email: string) => Promise<boolean>
}