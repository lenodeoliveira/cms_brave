export interface UpdateContentRepository {
  update: (id: string) => Promise<boolean>
}