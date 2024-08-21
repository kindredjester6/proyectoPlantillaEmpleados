import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

/**
 * @function bootstrap Este procedimiento levanta la aplicación.
 * Primeramente lo que hace es crear los modulos anidados, y sucesivamente 
 * levantar la aplicacion en el puerto asignado.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(9876);
}

bootstrap();
