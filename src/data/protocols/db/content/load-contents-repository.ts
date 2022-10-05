export interface LoadContentsRepository {
  loadAll: () => Promise<LoadContentsRepository.Result[]>
}

export namespace LoadContentsRepository {
  export type Result = {
    id: string
    title: string;
    userId: string;
    slug: string;
    image?: string;
    body: string;
    published: number;
    createAt: Date;
    updateAt: Date;
  }
}