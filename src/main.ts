import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as fs from 'fs';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

(async function () {
  const SSL = process.env.SSL === 'true';
  let httpsOptions = null;

  if (SSL) {
    const keyPath = process.env.SSL_KEY_PATH || '';
    const certPath = process.env.SSL_CERT_PATH || '';

    httpsOptions = {
      key: fs.readFileSync(keyPath),
      cert: fs.readFileSync(certPath),
    };
  }

  const app = await NestFactory.create(AppModule, {
    httpsOptions
  });

  const configService = app.get(ConfigService);

  const SERVER_PORT = Number(configService.get('SERVER_PORT')) || 3333;
  const SERVER_HOST = configService.get('SERVER_HOST') || 'localhost';

  const config = new DocumentBuilder()
    .setTitle('Web Streamline BFF API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(SERVER_PORT, SERVER_HOST, () => {
    const address = 'http' + (SSL ? 's' : '') + '://' + SERVER_HOST + ':' + SERVER_PORT + '/';
    console.log('Listening at ' + address);
  });
})();
