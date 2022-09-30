

import {
    accountSchema,
    signUpParamsSchema,
    loginParamsSchema,
    contentSchema,
    contentsSchema,
    addContentSchema,
    updateContentSchema,
    errorSchema,
} from './schemas/'

export default {
    account: accountSchema,
    loginParams: loginParamsSchema,
    signUpParams: signUpParamsSchema,
    addContent: addContentSchema,
    updateContent: addContentSchema,
    content: contentSchema,
    contents: contentsSchema,
    error: errorSchema,
}