import { Schema, model } from 'mongoose'
import { IProduct } from './product.interface'

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  cetagory: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Cetagory',
  },
  size: {
    type: String,
    enum: ['small', 'medium', 'large'],
  },
})

export const Product = model<IProduct>('Product Schema', productSchema)
