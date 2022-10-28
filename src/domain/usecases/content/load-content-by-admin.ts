export interface LoadContentByAdmin {
  loadOneContent: (id: string) => Promise<LoadContentByAdmin.Result>
}

export namespace LoadContentByAdmin {
  export type Result = {
    id: string
    title: string
    author: string,
    slug: string
    image?: string
    body: string
    published: number
    createAt: Date
    updateAt: Date
  }
}
