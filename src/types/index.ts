export interface HealthResponse {
  status: string;
  timestamp: string;
}

export interface Config {
  port: number;
  dbUri: string;
  apiKey: string;
}

export interface ErrorResponse {
  message: string;
  statusCode: number;
}