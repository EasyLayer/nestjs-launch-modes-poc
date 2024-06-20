import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, EventPattern, Payload, RmqContext, TcpContext } from '@nestjs/microservices';

@Controller()
export class AppController {
  @EventPattern('create_item')
  async handleCreateItem(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log('Item creation:', data);
  }

  @MessagePattern('get_status')
  getStatus(@Payload() data: any, @Ctx() context: TcpContext) {
    console.log('Status request:', data);
    return 'OK';
  }
}
