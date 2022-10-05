import { LoadContents } from '@/domain/usecases/content/load-contents'

export interface LoadContentsRepository {
  loadAll: () => Promise<LoadContents.Result[]>
}
