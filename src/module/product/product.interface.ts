import { Types } from "mongoose"

export type IProduct = {
  name: string
  price: number
  image: string
  description: string
  cetagory: Types.ObjectId
  size?: 'small' | 'medium' | 'large'
}