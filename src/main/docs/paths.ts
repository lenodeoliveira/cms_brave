import {
    loginPath,
    signUpPath,
    contentsPath,
    updateContentsPath
} from './paths/'

export default {
    '/login': loginPath,
    '/signup': signUpPath,
    '/contents': contentsPath,
    '/contents/{contentId}': updateContentsPath
}