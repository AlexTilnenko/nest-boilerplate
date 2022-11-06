import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { BaseModule } from './modules/base/base.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    AuthModule,
    BaseModule,
  ],
  controllers: [],
  providers: [],
  exports: []
})

export class AppModule {}
