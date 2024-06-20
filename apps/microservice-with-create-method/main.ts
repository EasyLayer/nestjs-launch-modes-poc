import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
    try {
        const microserviceTcp = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
            transport: Transport.TCP,
            options: {
              host: 'localhost',
              port: 3000,
            },
        });

        await microserviceTcp.listen();

        // const microserviceMqtt = await NestFactory.createMicroservice(AppModule, {
        //     transport: Transport.MQTT,
        //     options: { host: 'localhost', port: 3001 },
        // });
        
        // await microserviceMqtt.listen();

        console.log(`Application as microservice with TCP transport`);
    } catch (error) {
        console.log('Application error: ', error);
        process.exit(1);
    }
}

bootstrap();
