import express, { json, urlencoded } from 'express';
import 'dotenv/config';
import logger from 'morgan';
import debug from 'debug';
import swaggerJsDocs from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';

const log = debug('dev');
const app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));

const PORT = process.env.PORT || 8000;
const server = `http://localhost:${PORT}`;

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'EMPOWER FARMERS',
      description:
        'This application is developed towards the empowerment of farmers in africa',
      contact: {
        name: 'Fortune'
      },
      servers: `${server}`
    },
    basePath: '/api/v1'
  },
  // loop on all route
  apis: ['**/**.route.js'] // pass all in array
};

const swaggerDOCS = swaggerJsDocs(swaggerOptions);

app.use('/api/v1', routes);

app.use('/api-docs', routes);

app.use('', swaggerUi.serve, swaggerUi.setup(swaggerDOCS));

app.get('/api/v1', (req, res) => {
  res.status(200).json({ message: 'Welcome to EMPOWER FARMERS API' });
});


app.set('port', PORT);
app.listen(PORT, () => log(`App listening on port ${server}`));

export default app;
