import { LoadContent } from '@/domain/usecases/content/load-content'

export interface LoadContentRepository {
  loadOne: (slug: string) => Promise<LoadContent.Result>
}
