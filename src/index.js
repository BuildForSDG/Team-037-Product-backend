import express, { json, urlencoded } from 'express';
import { config } from 'dotenv';
import logger from 'morgan';
import debug from 'debug';

config();
const { PORT } = process.env;
const log = debug('dev');
const app = express();
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.listen(PORT, () => log(`App listening on port ${PORT}!`));