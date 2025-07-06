import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'AdoptMe - Proyecto Final Backend 3 - Com 74605',
            version: '1.0.0',
            description: 'Documentacion del proyecto adoptme con Swagger',
        }
    },
    apis: ['src/routes/*.js']
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);