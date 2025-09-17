import { createServer } from 'http';
import { configuration } from './config';
import app from '../app';

const PORT = configuration.port;

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

server.on('error', (error) => {
  console.error('Server error:', error);
});