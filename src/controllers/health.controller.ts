import { Request, Response } from 'express';
import { HealthService } from '../services/health.service';

export class HealthController {
  private healthService = new HealthService();

  checkHealth(req: Request, res: Response): void {
    res.status(200).json(this.healthService.checkHealth());
  }
}