export const retrieveUserByAdminPath = {

    get: {
        security: [{
            apiKeyAuth: []
        }],
        tags: ['Users'],
        summary: 'API para pesquisar usuário por ID',
        description: 'Essa rota só pode ser executada por **administradores**',
        parameters: [{
            in: 'path',
            name: 'id',
            required: true,
            schema: {
                type: 'string'
            }
        }],
        responses: {
            200: {
                description: 'Sucesso',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/users'
                        }
                    }
                }
            },
            204: {
                description: 'Sucesso, mas sem dados para exibir'
            },
            403: {
                $ref: '#/components/forbidden'
            },
            404: {
                $ref: '#/components/notFound'
            },
            500: {
                $ref: '#/components/serverError'
            }
        }
    },
}