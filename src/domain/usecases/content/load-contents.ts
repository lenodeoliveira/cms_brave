export interface LoadContents {
  load: () => Promise<LoadContents.Result[]>
}

export namespace LoadContents {
  export type Result = {
    id: string
    title: string
    nameUser: string,
    slug: string
    image?: string
    body: string
    published: number
    createAt: Date
    updateAt: Date
  }
}
