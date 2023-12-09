import { Types } from "mongoose"

export type IProduct = {
  _id: string
  name: string
  price: number
  image: string
  description: string
  cetagory: Types.ObjectId
  size?: 'small' | 'medium' | 'large'
}