import { Injectable } from '@nestjs/common';
import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import * as https from 'https';

@Injectable()
export class HttpSetupConfig implements HttpModuleOptionsFactory {
  constructor(private configService: ConfigService) {}

  createHttpOptions(): HttpModuleOptions {
    return {
      baseURL: this.configService.get('SL_SERVER_BASE_URL'),
      headers: {
        'Authorization': 'Basic YWRtaW46YWRtaW4xMjM=',
        'Accept': `api-version=${this.configService.get<string>('API_VERSION')}`,
        'Content-type': 'plain/text',
        'Cookie': 'sessionId=cipgabWQ46clXzB2TRJB9MwB81q6FPK4'
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: this.configService.get<string>('SSL') === 'true'
      }),
      withCredentials: true
    };
  }
}