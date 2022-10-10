import { LoadContent } from '@/domain/usecases/content/load-content'

export interface LoadContentRepository {
  findOneContent: (slug: string) => Promise<LoadContent.Result>
}
