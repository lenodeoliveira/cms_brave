export interface UpdateUserByAdmin {
  registerUser: (user: UpdateUserByAdmin.Params) => Promise<UpdateUserByAdmin.Result>
}

export namespace UpdateUserByAdmin {
  export type Params = {
    name: string
    status?: number
    role?: string
  }
  export type Result = boolean
}