

import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
    openapi: '3.0.0',
    info: {
        title: 'CMS Brave',
        description: 'API desenvolvida para servir de base para projetos internos que precisem de um gerenciador de conteúdo',
        version: '1.0.0'
    },
    servers: [{
        url: '/api',
        description: 'Servidor Principal',
    }],
    tags: [{
        name: 'Login',
        description: 'APIs relacionadas a Login'
    },{
        name: 'Contents',
        description: 'APIs relacionadas a criação,edição e obtenção de conteúdos'
    }
    ],
    paths,
    schemas,
    components
}