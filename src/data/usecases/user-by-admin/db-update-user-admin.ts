import { UpdateUserByAdmin } from '@/domain/usecases/users/update-user'

export class DbUpdateUserByAdmin implements UpdateUserByAdmin {
    async registerUser (user: UpdateUserByAdmin.Params): Promise<boolean> {
        return Promise.resolve(null)
    }
  
}