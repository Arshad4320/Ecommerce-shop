import { NextFunction, Request, Response } from 'express'
import { Product } from './product.model'

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await Product.create(req.body)
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Product created successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

const getProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await Product.find({}).populate('cetagory')
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Product found successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}
const getProductByCetagory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {id}=req.params
    const result = await Product.find({cetagory:id}).populate('cetagory')
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Product found successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

const getSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const result = await Product.findById(id)
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Single Product found successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const result = await Product.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Product updated successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const result = await Product.findByIdAndDelete(id)
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'product deleted successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}
export const productController = {
  createProduct,
  getProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getProductByCetagory,
}
