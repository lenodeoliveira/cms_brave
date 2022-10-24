import {
    loginPath,
    signUpPath,
    contentsPath,
    updateContentsPath,
    oneContentPath,
    paginationContentPath,
    uploadImageContentPath,
    deleteUploadImageContentPath,
    usersPath,
    deleteContentsPath,
    updateUsersPath,
    oneUserPath,
    retrieveUserByAdminPath
} from './paths/'

export default {
    '/login': loginPath,
    '/signup': signUpPath,
    '/contents/': contentsPath,
    '/contents': paginationContentPath,
    '/contents/{Id}': updateContentsPath,
    '/contents/{contentId}': deleteContentsPath,
    '/contents/{Slug}': oneContentPath,
    '/upload/': uploadImageContentPath,
    '/upload/{image}': deleteUploadImageContentPath,
    '/register/auth/users': usersPath,
    '/register/auth/users/{Id}': updateUsersPath,
    '/register/auth/users/{userId}': oneUserPath,
    '/register/auth/users/{id}': retrieveUserByAdminPath,
}