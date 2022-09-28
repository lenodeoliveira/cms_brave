export interface AddContent {
  add: (account: AddContent.Params) => Promise<void>
}

export namespace AddContent {
  export type Params = {
    title: string
    slug: string
    image?: string
    body: string
    published: number
  }
}
