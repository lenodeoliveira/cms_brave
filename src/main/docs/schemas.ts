

import {
    accountSchema,
    signUpParamsSchema,
    loginParamsSchema,
    contentSchema,
    contentsSchema,
    addContentSchema,
    updateContentSchema,
    errorSchema,
    uploadImageContent,
    usersSchema,
    usersParamsSchema,
    usersUpdateParamsSchema,
    forgotPasswordSchema
} from './schemas/'

export default {
    account: accountSchema,
    loginParams: loginParamsSchema,
    signUpParams: signUpParamsSchema,
    addContent: addContentSchema,
    updateContent: updateContentSchema,
    content: contentSchema,
    contents: contentsSchema,
    contentPagination: contentsSchema,
    error: errorSchema,
    uploadImageContent: uploadImageContent,
    users: usersSchema,
    usersParamsSchema: usersParamsSchema,
    usersUpdateParamsSchema: usersUpdateParamsSchema,
    forgotPasswordSchema: forgotPasswordSchema
}