export class HealthService {
  checkHealth(): { status: string } {
    return { status: 'OK' };
  }
}