const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mini Trello API',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ bearerAuth: [] }],
    servers: [{ url: 'http://localhost:8000' }],
  },
  apis: ['./routes/*.js'],
};


module.exports = swaggerOptions;