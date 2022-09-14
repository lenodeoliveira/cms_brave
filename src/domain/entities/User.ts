import { Email } from './value-objects/Email'
import { Password } from './value-objects/Password'
import { UserType } from './value-objects/UserType'

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
