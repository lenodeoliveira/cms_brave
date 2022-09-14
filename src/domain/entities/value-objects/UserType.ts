import { CustomError } from '@/application/exceptions/CustomError'

export class UserType {
    private value: string
    constructor(
        value: string
    ) { 
        if (!this.validate(value)) throw new CustomError(400, 'invalid type')
        this.value = value
    }

    getValue(): string {
        return this.value
    }

    private isAllowedType(type: string) {
        return type === 'user' || type === 'admin'
    }

    private validate(type: string) {
        if (!type) return false
        return this.isAllowedType(type)
    }
}
