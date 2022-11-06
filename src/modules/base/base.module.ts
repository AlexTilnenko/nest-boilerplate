import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { APP_FILTER } from '@nestjs/core';
import { Services } from './services';
import { Controllers } from './controllers';
import { FormatParserService } from '../../shared/format-parser/format-parser.service';
import { HttpSetupConfig } from '../../config/http-setup.config';
import { HttpExceptionFilter } from '../../filters/http-exception.filter';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useClass: HttpSetupConfig,
      inject: [ConfigService]
    }),
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    ...Services,
    FormatParserService
  ],
  controllers: [
    ...Controllers
  ]
})
export class BaseModule {}
