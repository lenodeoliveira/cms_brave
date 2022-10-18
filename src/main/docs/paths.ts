import {
    loginPath,
    signUpPath,
    contentsPath,
    updateContentsPath,
    oneContentPath,
    paginationContentPath,
    uploadImageContentPath,
    deleteUploadImageContentPath
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
}