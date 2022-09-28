import { AddContent } from '@/domain/usecases/content/add-content'

export interface AddContentRepository {
  add: (data: AddSurveyRepository.Params) => Promise<void>
}

export namespace AddSurveyRepository {
  export type Params = AddContent.Params
}