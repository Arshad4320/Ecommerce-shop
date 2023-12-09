import { Types } from 'mongoose'

export type IAaddToCart = {
  productId: Types.ObjectId
  userId: Types.ObjectId
  quantity: number
  totalPrice: number
}
