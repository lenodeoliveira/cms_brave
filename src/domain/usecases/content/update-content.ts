export interface UpdateContent {
  updateContent: (content: UpdateContent.Result) => Promise<boolean>
}

export namespace UpdateContent {
  export type Result = {
    id: string
    title: string
    userId: string
    slug: string
    image?: string
    body: string
    published: number
  }
}