import { config } from 'dotenv';

config();

export const configuration = {
  port: process.env.PORT || 3000,
  dbUri: process.env.DB_URI || 'mongodb://localhost:27017/mydatabase',
  apiKey: process.env.API_KEY || 'your-api-key',
  nodeEnv: process.env.NODE_ENV || 'development',
};