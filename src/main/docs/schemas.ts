

import {
    accountSchema,
    signUpParamsSchema,
    loginParamsSchema,
    contentSchema,
    contentsSchema,
    addContentSchema,
    errorSchema,
} from './schemas/'

export default {
    account: accountSchema,
    loginParams: loginParamsSchema,
    signUpParams: signUpParamsSchema,
    addContent: addContentSchema,
    content: contentSchema,
    contents: contentsSchema,
    error: errorSchema,
}