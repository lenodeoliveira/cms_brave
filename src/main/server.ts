import 'module-alias/register'
import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 5050

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!!!!!')
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server iss running at https://localhost:${port}`)
})