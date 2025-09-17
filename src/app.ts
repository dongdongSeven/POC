// filepath: /Users/SevenZheng/study/node-cloud-service/src/app.ts
import express from 'express';
import { json } from 'body-parser';
import errorHandler from './middleware/errorHandler';
import routes from './routes/index';

const app = express();

// Middleware
app.use(json());

// Routes - Vercel will handle routing to this app.
app.use('/', routes);

// Error handling middleware
app.use(errorHandler);

export default app;