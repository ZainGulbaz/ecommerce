import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Products, ProductsDocument } from './products.entity';
@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products.name) private productModel: Model<ProductsDocument>,
  ) {}

  async addProducts(body: any) {
    try {
      this.productModel.create(body);
    } catch (error) {
      console.log(error);
    }
  }
}
