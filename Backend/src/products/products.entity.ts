import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductsDocument = HydratedDocument<Products>;

@Schema()
export class Products {
  @Prop({ required: [true, 'Name of the product is required'] })
  name: string;

  @Prop({ required: [true, 'Description of the product is required'] })
  description: string;

  @Prop({
    required: [true, 'Price of the product is required'],
    maxlength: [8, 'Cannot exceed more than 8 numbers'],
  })
  price: number;

  @Prop({ default: 0 })
  rating: number;

  @Prop()
  images: [
    {
      url: { type: string; required: true };
      public_id: { type: string; required: true };
    },
  ];

  @Prop({ required: [true, 'Price of the products is required'] })
  category: string;

  @Prop({
    default: 1,
    maxlength: [4, 'stock of the product cannot be more than 4 digits'],
  })
  stock: number;

  @Prop({ default: 0 })
  numOfReviews: number;

  @Prop()
  reviews: [
    {
      name: { type: string; required: true };
      rating: { type: string; required: true };
      comment: { type: string; required: true };
    },
  ];
}

export const ProductsSchema = SchemaFactory.createForClass(Products);
