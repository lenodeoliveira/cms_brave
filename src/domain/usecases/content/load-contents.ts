export interface LoadContents {
  load: () => Promise<LoadContents.Result[]>
}

export namespace LoadContents {
  export type Result = {
    title: string
    userId: string,
    slug: string
    image?: string
    body: string
    published: number
    createAt: Date
    updateAt: Date
  }
}
