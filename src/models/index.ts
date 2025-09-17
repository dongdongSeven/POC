import { Schema, model } from 'mongoose';

const healthCheckSchema = new Schema({
  status: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const HealthCheck = model('HealthCheck', healthCheckSchema);

export { HealthCheck };