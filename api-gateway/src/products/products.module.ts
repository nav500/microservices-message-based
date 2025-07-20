import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [ProductsController],
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.TCP,
        options: { port: 3001 },
      },
    ]),
  ],
})
export class ProductsModule {}
