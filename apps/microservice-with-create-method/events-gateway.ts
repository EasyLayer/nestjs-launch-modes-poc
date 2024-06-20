import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';

// Here you can specify the port for the WebSocket server.
// If you don’t specify a port and you start an http server, 
// then the same port will appear here automatically.
@WebSocketGateway(3002)
export class EventsGateway {
  @SubscribeMessage('message')
  handleEvent(@MessageBody() data: string): void {
    console.log('handle event');
  }
}
