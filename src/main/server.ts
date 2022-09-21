import 'module-alias/register'
import dotenv from 'dotenv'
import { setupApp } from '@/main/config/app'
import env  from '@/main/config/env'

(async () => {
    dotenv.config()
    const port = env.port
    const app = await setupApp()
    app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
})()

