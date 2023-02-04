import express, { ErrorRequestHandler, json } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import sanitize from 'express-mongo-sanitize';

import { connectToMongoDb, CORS, isLambdaRuntime } from './commons';
import healthRoutes from './routes/health.routes';
import movieRoutes from './routes/movie.routes';
import genresRoutes from './routes/genres.routes';
import sortOptionRoutes from './routes/sort-options.routes';
import signUp from './routes/security.routes';


dotenv.config();

if (!isLambdaRuntime()) {
  connectToMongoDb();
}

const app = express();

app.use(helmet());
app.use(json());
app.use(CORS);
app.use(sanitize());

app.use('/health', healthRoutes);
app.use('/movies', movieRoutes);
app.use('/genres', genresRoutes);
app.use('/sort-options', sortOptionRoutes);
app.use('/sign-up', signUp)

const errorLogger: ErrorRequestHandler = (err, _req, _res, next) => {
  console.error(err.stack);
  next(err);
};
app.use(errorLogger);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  res.status(500).json({ error: err.errors || err.message || 'Unknown Error' });
};
app.use(errorHandler);

app.use((_req: express.Request, res: express.Response) => {
  res.status(404).json({ error: 'Not found' });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(3001, () => {
    console.log('Application started');
  });
}

export default app;
