import { Controller, Get } from '@nestjs/common';
import { responsePayload } from 'src/Utils/Commons';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(): responsePayload {
    return {
      messages: ['The products are fetched successfully'],
      statusCode: 200,
      data: [],
    };
  }
}
