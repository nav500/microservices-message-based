import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { sampleOrders } from './orders';

@Controller()
export class OrdersController {
  @MessagePattern({ cmd: 'getOrders' })
  getOrders() {
    return sampleOrders;
  }
}
