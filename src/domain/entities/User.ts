import { Email } from '@/domain/entities/value-objects/Email'
import { Password } from '@/domain/entities/value-objects/Password'
import { UserType } from '@/domain/entities/value-objects/UserType'

export class User {
    email: Email
    password: Password
    type: UserType
    
    constructor(
        readonly id: string,
        readonly name: string,
        email: string,
        password: string,
        type: string
    ) { 
        this.email = new Email(email)
        this.password = new Password(password)
        this.type = new UserType(type)
    }
}
