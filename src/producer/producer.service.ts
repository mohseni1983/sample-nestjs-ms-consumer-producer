import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class ProducerService {
    constructor(
        @Inject('CONSUMER_SERVICE') private readonly client:ClientProxy
    ) {}


    reflect(data: any) {
        this.client.emit('reflect', data);
    }
}


