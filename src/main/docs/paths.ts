import {
    loginPath,
    signUpPath,
    contentsPath,
    updateContentsPath,
    oneContentPath,
    paginationContentPath,
    uploadImageContentPath,
    deleteUploadImageContentPath,
    usersPath
} from './paths/'

export default {
    '/login': loginPath,
    '/signup': signUpPath,
    '/contents': contentsPath,
    '/contents/': paginationContentPath,
    '/contents/{Id}': updateContentsPath,
    '/contents/{slug}': oneContentPath,
    '/upload/': uploadImageContentPath,
    '/upload/{image}': deleteUploadImageContentPath,
    '/register/auth/users': usersPath,
}