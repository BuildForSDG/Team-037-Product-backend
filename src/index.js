import express, { json, urlencoded } from 'express';
import 'dotenv/config';
import logger from 'morgan';
import cors from 'cors';
import debug from 'debug';
import expressUpload from 'express-fileupload';
import setPassportMiddleware from './services/strategy';
import routes from './routes';

const log = debug('dev');
const app = express();
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(expressUpload({ useTempFiles: true }));
app.use('/api/v1', routes);

const PORT = process.env.PORT || 8000;
app.use(cors());
const server = `http://localhost:${PORT}`;
app.use('/api/v1', routes);

setPassportMiddleware(app);
app.get('/', (req, res) => {
  res.status(200).send('Welcome to EMPOWER FARMERS API');
});

app.listen(PORT, () => log(`App listening on port ${server}!`));

export default app;
