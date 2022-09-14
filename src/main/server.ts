import 'module-alias/register'
import { User } from '@/domain/entities/User'
import { randomUUID } from 'crypto'
import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 5050

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server')
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})

const user = new User(
    randomUUID(),
    'Juliano',
    'juliano.silva@brave.ag',
    '123456',
    'user'
)