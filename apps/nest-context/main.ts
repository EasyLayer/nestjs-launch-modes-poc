import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
    try {
        const appContext = await NestFactory.createApplicationContext(AppModule)
        const appService = appContext.get(AppService);
        await appService.doSomething();
    } catch (error) {
        console.log('Application error: ', error);
        process.exit(1);
    }
}

bootstrap();
