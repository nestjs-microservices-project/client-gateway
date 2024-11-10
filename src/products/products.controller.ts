import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}
  
  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
  }

  @Get()
  findAllProducts(@Query() paginationDto: PaginationDto) {
 
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
  }

  @Patch(':id')
  patchProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    
  }
}
