import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
  @Prop({
    trim: true,
    maxlength: 50,
  })
  title: string;

  @Prop({
    trim: true,
  })
  description: string;

  @Prop()
  price: number;

  @Prop({
    trim: true,
  })
  thumbnail: string;

  @Prop({
    trim: true,
    unique: true,
  })
  code: string;

  @Prop({
    trim: true,
  })
  category: string;

  @Prop()
  status: boolean;

  @Prop()
  stock: number;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
