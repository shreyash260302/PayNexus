import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe()); // Enable validation globally
  app.enableCors({
    origin: "http://localhost:3000", // Change this to your frontend URL
    methods: "GET,POST",
    allowedHeaders: "Content-Type,Authorization",
  });
  
  await app.listen(4000);
  console.log('Server is running on http://localhost:4000');
}
bootstrap();
