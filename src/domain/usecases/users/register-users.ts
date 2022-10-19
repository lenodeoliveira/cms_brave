export interface RegisterUser {
  register: (user: RegisterUser.Params) => Promise<RegisterUser.Result>
}

export namespace RegisterUser {
  export type Params = {
    name: string
    email: string
    password: string
    status: number
    role: string
  }
  export type Result = boolean
}