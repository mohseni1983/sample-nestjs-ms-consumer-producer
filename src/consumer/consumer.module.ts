import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GatewayController } from './gateway.controller';
import { ProducerModule } from 'src/producer/producer.module';

@Module({
    imports: [

          ProducerModule
    ],
    controllers: [GatewayController],
    providers: [],
})
export class ConsumerModule {}
