import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDTO } from 'src/DAO/DTO/create-product.dto';
import { UpdateProductDTO } from 'src/DAO/DTO/update-product.dto';
import { Product } from 'src/DAO/schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async findAll() {
    this.productModel.find();
  }
  async create(createProduct: CreateProductDTO) {
    const newProduct = new this.productModel(createProduct);
    await newProduct.save();
    return newProduct;
  }
  async findOne(id: string) {
    return this.productModel.findById(id);
  }

  async delete(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }

  async update(id: string, product: UpdateProductDTO) {
    return this.productModel.findByIdAndUpdate(id, product);
  }
}
