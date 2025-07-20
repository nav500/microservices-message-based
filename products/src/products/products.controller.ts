import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { sampleProducts } from './products';

@Controller()
export class ProductsController {
  @MessagePattern({ cmd: 'getProducts' })
  getProducts() {
    return sampleProducts;
  }
}
