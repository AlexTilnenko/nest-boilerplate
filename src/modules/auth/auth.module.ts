import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { APP_FILTER } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
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
    AuthService,
    FormatParserService
  ],
  controllers: [AuthController]
})
export class AuthModule {}
