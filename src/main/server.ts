import 'module-alias/register'
import dotenv from 'dotenv'
import { setupApp } from '@/main/config/app'
import { MyqslConnection } from '@/infra/db/mysqldb/helpers/connection'
import env  from '@/main/config/env'

dotenv.config()

MyqslConnection.connect(
    env.dbDatabase,
    env.dbUserName,
    env.dbPassword,
    env.dbHost
).then(async () => {
    const port = env.port
    const app = await setupApp()
    app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
})
    .catch(console.error)