import { Controller } from "@nestjs/common";
import { ProducerService } from "../producer/producer.service";
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class GatewayController {
    constructor(
        private readonly producerService: ProducerService
    ) {}

    @MessagePattern('reflect')
    reflect(data: any) {
        return this.producerService.reflect(data);
    }
}