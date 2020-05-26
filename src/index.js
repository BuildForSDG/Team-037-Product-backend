import express, { json, urlencoded } from 'express';
import 'dotenv/config';
import logger from 'morgan';
import cors from 'cors';
import debug from 'debug';
import expressUpload from 'express-fileupload';
import setPassportMiddleware from './services/strategy';
// import routes from './routes/index';
import cors from 'cors';
import path from 'path';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';

const log = debug('dev');
const app = express();
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(expressUpload({ useTempFiles: true }));
app.use(cors());
app.use('/api/v1', routes);

const PORT = process.env.PORT || 8000;
app.use(cors());
const server = `http://localhost:${PORT}`;
app.use('/api/v1', routes);

setPassportMiddleware(app);
app.get('/', (req, res) => {
  res.status(200).send('Welcome to EMPOWER FARMERS API');
app.use('/api-docs', routes);
app.get('/api/v1', (req, res) => {
  res.status(200).json({ message: 'Welcome to EMPOWER FARMERS API' });
});
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'));
app.listen(PORT, () => log(`App listening on port ${server}!`));

const documentation = YAML.load(path.join(__dirname, '../docs/swagger.yaml'));
documentation.servers[0].url = process.env.SERVER_URL;
// setup swagger documentation
app.use('/docs',swaggerUi.serve, swaggerUi.setup(documentation));
app.set('port', PORT);
app.listen(PORT, () => log(`App listening on port ${server}`));

export default app;
