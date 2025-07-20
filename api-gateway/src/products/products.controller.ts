import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
  constructor(@Inject('PRODUCT_SERVICE') private client: ClientProxy) {}

  @Get()
  getProducts() {
    const pattern = { cmd: 'getProducts' };
    return this.client.send(pattern, {});
  }
}
