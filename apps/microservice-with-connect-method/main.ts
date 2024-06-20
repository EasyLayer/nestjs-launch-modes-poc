import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
    try {
        const app = await NestFactory.create(AppModule);

        app.connectMicroservice({
            transport: Transport.TCP,
            options: {
                host: 'localhost',
                port: 3001,
            },
        });

        app.connectMicroservice({
            transport: Transport.RMQ,
            options: {
                urls: ['amqp://localhost'],
                queue: 'nest_queue',
                queueOptions: {
                    durable: false,
                },
            },
        });

        await app.startAllMicroservices();
        await app.listen(3000);

        console.log(`Application as microservice with TCP transport`);
    } catch (error) {
        console.log('Application error: ', error);
        process.exit(1);
    }
}

bootstrap();
