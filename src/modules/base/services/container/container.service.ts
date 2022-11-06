import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom, map, Observable } from 'rxjs';
import { ContainerServiceInterface } from './container.service.interface';
import { ServerException } from '../../exceptions/server.exception';
import { CreateContainerDto } from '../../dto/container/create-container.dto';
import { UpdateContainerDto } from '../../dto/container/update-containers.dto';
import { CreateContainerAdapter } from '../../adapters/server/container/create-container.adapter';
import { UpdateContainerAdapter } from '../../adapters/server/container/update-container.adapter';
import { FormatParserService } from '../../../../shared/format-parser/format-parser.service';

@Injectable()
export class ContainerService implements ContainerServiceInterface{
  constructor(private readonly httpService: HttpService, private formatParser: FormatParserService) {
  }

  getAll(): Promise<any> {
    const response: Observable<any> = this.httpService.get('/containers').pipe(
      map((res) => {
        return this.formatParser.xmlToJson(res.data);
      }),
      catchError((e) => {
        throw new ServerException(e.response, e.response.status);
      })
    );

    return firstValueFrom(response);
  }

  create(container: CreateContainerDto): Promise<any> {
    const response: Observable<any> = this.httpService.post('/containers',
      this.formatParser.jsToXml(CreateContainerAdapter(container))).pipe(
      map((res) => {
        return this.formatParser.xmlToJson(res.data);
      }),
      catchError((e) => {
        throw new ServerException(e.response, e.response.status);
      })
    );

    return firstValueFrom(response);
  }

  update(containers: UpdateContainerDto[]): Promise<any> {
    const response: Observable<any> = this.httpService.post('/containers',
      this.formatParser.jsToXml(UpdateContainerAdapter(containers))).pipe(
      map((res) => {
        return this.formatParser.xmlToJson(res.data);
      }),
      catchError((e) => {
        throw new ServerException(e.response, e.response.status);
      })
    );

    return firstValueFrom(response);
  }
}
