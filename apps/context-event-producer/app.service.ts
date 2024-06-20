import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('RABBITMQ_PRODUCER') private readonly client: ClientProxy) {}

  async sendMessage(message: string) {
    return this.client.emit<any>('create_item', { text: message });
  }
}
