const path = require('path');

module.exports = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mini Trello API',
      version: '1.0.0',
      description: 'A simple API for task and board management',
    },
    servers: [
      {
        url: 'http://localhost:8000',
        description: 'Local development server',
      },
      {
        url: 'https://task-management-api-mini-trello.onrender.com',
        description: 'Production server',
      },
    ],
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
  },
  apis: [path.join(__dirname, './routes/*.js')],
};
