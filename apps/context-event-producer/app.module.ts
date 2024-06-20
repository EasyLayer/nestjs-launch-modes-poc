import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RABBITMQ_PRODUCER',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost'],
          queue: 'nest_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  providers: [AppService],
})
export class AppModule {}