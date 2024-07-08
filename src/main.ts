import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {JwtAuthGuard} from "./auth/jwt-auth.guard";
import {ValidationPipe} from "./pipes/validation.pipe";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const configSwagger = new DocumentBuilder()
    .setTitle('Урок по backend')
    .setDescription('Докумментация')
    .setVersion('1.0.0')
    .addTag('Pauchok')
    .build();
  const documentSwagger = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('/api/docs', app, documentSwagger);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
}

start();