import {
    loginPath,
    signUpPath,
    contentsPath,
    updateContentsPath,
    oneContentPath,
    paginationContentPath
} from './paths/'

export default {
    '/login': loginPath,
    '/signup': signUpPath,
    '/contents': contentsPath,
    '/contents/{Id}': updateContentsPath,
    '/contents/{slug}': oneContentPath,
    '/contents/': paginationContentPath
}