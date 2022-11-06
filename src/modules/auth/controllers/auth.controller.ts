import { Controller, Get, Req } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { Request } from 'express';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({
    summary: 'Check if sl server has running project instance',
    tags: ['Auth']
  })
  @ApiResponse({
    status: 200,
    description: 'Is sl server has running project instance'
  })
  @Get('/status')
  getStatus(): Promise<any> {
    return this.authService.getProjectStatus();
  }

  @ApiOperation({
    summary: 'Map current user to project instance and generate sessionId',
    tags: ['Auth']
  })
  @ApiResponse({
    status: 200,
    description: 'sessionId cookie'
  })
  @Get('/session')
  getSession(@Req() request: Request): Promise<any> {
    return this.authService.getProjectSession(request);
  }
}
