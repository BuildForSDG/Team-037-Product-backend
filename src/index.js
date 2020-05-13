import express, { json, urlencoded } from 'express';
import 'dotenv/config';
import logger from 'morgan';
import debug from 'debug';
import routes from './routes/index';

const log = debug('dev');
const app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use('/api/v1/', routes);

const PORT = process.env.PORT || 8000;
app.set('port', PORT);
app.listen(PORT, () => log(`App listening on port ${PORT}!`));

export default app;
