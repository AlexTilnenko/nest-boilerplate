import { Request } from 'express';

export interface AuthServiceInterface {
  /**
   * Get project status
   * @return { Promise<any> }
   */
  getProjectStatus(): Promise<any>;

  /**
   * Get project session
   * @param { Request } request
   *
   * @return { Promise<any> }
   */
  getProjectSession(request: Request): Promise<any>;
}
