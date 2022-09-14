import { randomUUID } from 'crypto'
import { User } from '../../src/domain/entities/User'

test('Não deve criar um novo usuário se o email não for informado', () => {
    expect(() => new User(
        randomUUID(),
        'Juliano',
        '',
        '123456',
        'user'
    )).toThrowError('invalid email')
})

test('Não deve criar um novo usuário se o email for inválido', () => {
    expect(() => new User(
        randomUUID(),
        'Juliano',
        '',
        '123456',
        'user'
    )).toThrowError('invalid email')
})

test('Não deve criar um novo usuário se a senha não for informada', () => {
    expect(() => new User(
        randomUUID(),
        'Juliano',
        'juliano.silva@brave.ag',
        '',
        'user'
    )).toThrowError('invalid password')
})

test('Não deve criar um novo usuário se a senha for inválida', () => {
    expect(() => new User(
        randomUUID(),
        'Juliano',
        'juliano.silva@brave.ag',
        '12345',
        'user'
    )).toThrowError('invalid password')
})

test('Não deve ser possível setar uma senha inválida para o usuário', () => {
    const user = new User(
        randomUUID(),
        'Juliano',
        'juliano.silva@brave.ag',
        '123456',
        'user'
    )
    expect(() => user.password.setValue('12345')).toThrowError('invalid password')
})

test('Não deve criar um novo usuário se o tipo não for informado', () => {
    expect(() => new User(
        randomUUID(),
        'Juliano',
        'juliano.silva@brave.ag',
        '123456',
        ''
    )).toThrowError('invalid type')
})

test('Não deve criar um novo usuário com o tipo inválido', () => {
    expect(() => new User(
        randomUUID(),
        'Juliano',
        'juliano.silva@brave.ag',
        '123456',
        'moderator'
    )).toThrowError('invalid type')
})

test('Deve criar um novo usuário com o email válido', () => {
    const user = new User(
        randomUUID(),
        'Juliano',
        'juliano.silva@brave.ag',
        '123456',
        'user'
    )
    expect(user.email.getValue()).toBe('juliano.silva@brave.ag')
})

test('Deve criar um novo usuário com a senha válida', () => {
    const user = new User(
        randomUUID(),
        'Juliano',
        'juliano.silva@brave.ag',
        '123456',
        'user'
    )
    expect(user.password.getValue()).toBe('123456')
})

test('Deve ser possível setar uma senha válida para o usuário', () => {
    const user = new User(
        randomUUID(),
        'Juliano',
        'juliano.silva@brave.ag',
        '123456',
        'user'
    )
    user.password.setValue('1234567')
    expect(user.password.getValue()).toBe('1234567')
})

test('Deve criar um novo usuário do tipo usuário', () => {
    const user = new User(
        randomUUID(),
        'Juliano',
        'juliano.silva@brave.ag',
        '123456',
        'user'
    )
    expect(user.type.getValue()).toBe('user')
})

test('Deve criar um novo usuário do tipo admin', () => {
    const user = new User(
        randomUUID(),
        'Juliano',
        'juliano.silva@brave.ag',
        '123456',
        'admin'
    )
    expect(user.type.getValue()).toBe('admin')
})
