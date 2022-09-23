

import {
    accountSchema,
    signUpParamsSchema,
    loginParamsSchema,
    errorSchema,
} from './schemas/'

export default {
    account: accountSchema,
    loginParams: loginParamsSchema,
    signUpParams: signUpParamsSchema,
    error: errorSchema,
}