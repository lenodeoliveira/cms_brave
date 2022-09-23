

import { badRequest, unauthorized, serverError, notFound } from './components/'
import {
    apiKeyAuthSchema
} from './schemas/'

export default {
    securitySchemes: {
        apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    unauthorized,
    notFound,
    serverError
}