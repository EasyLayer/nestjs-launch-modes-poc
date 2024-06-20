import { Module } from '@nestjs/common';
import { createServer, IncomingMessage, ServerResponse } from 'http';

@Module({
  providers: [
    {
      provide: 'HTTP_SERVER',
      useFactory: () => {
        const server = createServer((req: IncomingMessage, res: ServerResponse) => {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Hello from custom HTTP server!');
        });

        server.listen(3000, () => {
          console.log('Custom HTTP server listening on port 3000');
        });

        return server;
      },
    },
  ],
})
export class AppModule {}
