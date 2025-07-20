import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
  constructor(@Inject('ORDER_SERVICE') private client: ClientProxy) {}

  @Get()
  getOrders() {
    const pattern = { cmd: 'getOrders' };
    return this.client.send(pattern, {});
  }
}
