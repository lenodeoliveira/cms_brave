import {
    loginPath,
    signUpPath,
    contentsPath,
    updateContentsPath,
    oneContentPath
} from './paths/'

export default {
    '/login': loginPath,
    '/signup': signUpPath,
    '/contents': contentsPath,
    '/contents/{contentId}': updateContentsPath,
    '/contents/{Id}': oneContentPath
}