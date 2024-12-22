import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProducerService } from './producer.service';

@Module({
    imports: [
        ClientsModule.register([
            {
              name: 'CONSUMER_SERVICE',
              transport: Transport.RMQ,
              options: {
                urls: ['amqp://localhost:5672'],
                queue: 'producer_queue',
              },
            },
          ]),
    ],
    providers: [
        ProducerService
    ],
    exports: [
        ProducerService
    ]
})
export class ProducerModule {}
