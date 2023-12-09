import { NextFunction, Request, Response } from 'express'
import { Cart } from './cart.model'
import { Product } from '../product/product.model'

const createCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { _id } = req.user
    const findProduct = await Product.findById(req.body.productId)

    if (!findProduct) {
      return res.status(201).send({
        success: false,
        statusCode: 404,
        message: 'Product not found',
      })
    }
    req.body.totalPrice = findProduct.price
    req.body.userId = _id
    const result = await Cart.create(req.body)
    res.status(201).send({
      success: true,
      statusCode: 201,
      message: 'Cart created successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}
const getCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { _id } = req.user
    const result = await Cart.find({ userId: _id }).populate('productId');
    console.log(result)
    res.status(200).json({
      succuss: true,
      statusCode: true,
      message: 'find all cart successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}
const getSingleCart = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const result = await Cart.findById(id)
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'get single cart',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}
const updateCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const quantity = req.body.quantity
    const { _id } = req.user
    const findCart = await Cart.findById(id)
    const findProduct = await Product.findById(findCart?.productId)
    if (!findCart || !findProduct) {
      return res.status(201).send({
        success: false,
        statusCode: 404,
        message: 'Cart not found',
      })
    }
    if (findCart.userId.toString() !== _id) {
      return res.status(201).send({
        success: false,
        statusCode: 404,
        message: 'You are not access to cart user',
      })
    }

    findCart.quantity = quantity
    findCart.totalPrice = findProduct.price * quantity
    await findCart.save()

    res.status(200).send({
      success: true,
      statusCode: 200,
      message: 'cart updated successfully',
      data: findCart,
    })
  } catch (err) {
    next(err)
  }
}
const deleteCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const result = await Cart.findByIdAndDelete(id)
    res.status(200).send({
      success: true,
      statusCode: 200,
      message: 'Cart deleted successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}
export const CartController = {
  createCart,
  getCart,
  getSingleCart,
  updateCart,
  deleteCart,
}
