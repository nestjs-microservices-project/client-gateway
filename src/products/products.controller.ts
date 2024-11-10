import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PRODUCT_SERVICE } from 'src/config';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_SERVICE) private productsClient: ClientProxy 
  ) {}
  
  @Post()
  createProduct() {

  }

  @Get()
  findAllProducts() {
    return this.productsClient.send({ cmd: 'find_all' }, {});
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
  }

  @Patch(':id')
  patchProduct(
    @Param('id', ParseIntPipe) id: number
  ) {
    
  }
}
