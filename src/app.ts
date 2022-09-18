import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middleware/error.middleware';
import carRouter from './routers/car.routes';

const app = express();
app.use(express.json());

app.use(carRouter);

app.use(errorMiddleware);

export default app;
