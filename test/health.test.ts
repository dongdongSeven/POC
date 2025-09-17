import request from 'supertest';
import app from '../src/app'; // Adjust the path if necessary
import HealthService from '../src/services/health.service';

describe('Health Check', () => {
  let healthService;

  beforeAll(() => {
    healthService = new HealthService();
  });

  it('should return a 200 status and health check message', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'OK' });
  });

  it('should call the health service checkHealth method', async () => {
    const checkHealthSpy = jest.spyOn(healthService, 'checkHealth').mockReturnValue({ status: 'OK' });
    await request(app).get('/health');
    expect(checkHealthSpy).toHaveBeenCalled();
  });
});