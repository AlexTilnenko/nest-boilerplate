import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom, map, Observable } from 'rxjs';
import { FormatParserService } from '../../../shared/format-parser/format-parser.service';
import { Request } from 'express';
import { ServerException } from '../../base/exceptions/server.exception';
import { AuthServiceInterface } from './auth.service.interface';

@Injectable()
export class AuthService implements AuthServiceInterface {
  constructor(private readonly httpService: HttpService, private formatParser: FormatParserService) {
  }

  getProjectStatus(): Promise<any> {
    const response$: Observable<any> = this.httpService.get('/status').pipe(
      map((res) => {
        return this.formatParser.xmlToJson(res.data);
      }),
      catchError((e) => {
        throw new ServerException(e.response, e.response.status);
      })
    );

    return firstValueFrom(response$);
  }

  async getProjectSession(request: Request): Promise<any> {
    try {
      const response = await this.httpService.axiosRef.get('/session');

      console.log(response.headers);

      return this.formatParser.xmlToJson(response.data);
    } catch (e) {
      throw new ServerException(e.response, e.response.status);
    }
  }
}
