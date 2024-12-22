import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GatewayController } from './consumer/gateway.controller';
import { ProducerService } from './producer/producer.service';
import { ConsumerModule } from './consumer/consumer.module';
import { ProducerModule } from './producer/producer.module';
@Module({
  imports: [

    ConsumerModule,
    ProducerModule
  ],

})
export class AppModule {}
