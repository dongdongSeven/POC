import express from 'express';
import { json } from 'body-parser';
import path from 'path';
import errorHandler from './middleware/errorHandler';
import routes from './routes/index';

const app = express();

// Middleware
app.use(json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// API Routes
app.use('/api', routes);

// Serve index.html for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Error handling middleware
app.use(errorHandler);

export default app;