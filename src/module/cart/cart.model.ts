import { Schema, model } from 'mongoose'
import { IAaddToCart } from './cart.interface'

const cartSchema = new Schema<IAaddToCart>({
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Product',
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
})
export const Cart = model<IAaddToCart>('Cart', cartSchema)
