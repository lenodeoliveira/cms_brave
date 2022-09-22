import { setupApp } from '@/main/config/app'

import { Express } from 'express'
import request from 'supertest'

let app: Express

describe('Login Routes', () => {
    beforeAll(async () => {
        app = await setupApp()
    })

    test('Should return an account on success', async () => {
        await request(app)
            .post('/api/signup')
            .send({
                name: 'any_email',
                email: 'any@gmail.com',
                password: '12345678',
                passwordConfirmation: '12345678'
            })
            .expect(500)
    })
})
