import 'module-alias/register'
import dotenv from 'dotenv'
import { setupApp } from '@/main/config/app'

dotenv.config()
const port = process.env.PORT || 5050
async function init() {
    const app = await setupApp()
    app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
}

init()
