const swaggerAutogen = require('swagger-autogen')();
//import swaggerAutogen from 'swagger-autogen';
const outputFile = './swagger.json';
const endpointsFiles = ['./server/src/*.js', './server/src/models/*.js', './server/src/routes/*.js'];
// index.js file , files in models and routes folder are the input files for api
const config = {
    info: {
        title: 'Your API Documentation',
        description: '',
    },
    tags: [],
    host: 'localhost:3001/api',
    schemes: ['http', 'https'],
    parameters: [],
};
swaggerAutogen(outputFile, endpointsFiles, config);