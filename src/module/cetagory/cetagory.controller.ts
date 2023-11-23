import { NextFunction, Request, Response } from 'express'
import { Cetagory } from './cetagory.model'

const createCetagory =async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // const { name } = req.body
    // const cetagory: ICetagory = {
    //   name,
    // }

    const result = await Cetagory.create(req.body)
    res.status(201).send({
      success: true,
      statusCode: 201,
      message: 'Cetagory created successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}
const updateCetagory =async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    const result = await Cetagory.findByIdAndUpdate(id, req.body,{new:true})
    res.status(200).send({
      success: true,
      statusCode: 201,
      message: 'Cetagory update successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

const getAllCetagory =async (req:Request,res:Response,next:NextFunction) => {
  try {
   
    const result = await Cetagory.find();
    
    res.status(200).json({
      success: true,
      statusCode: true,
      message: 'find all cetagory successfully',
      data:result
    })

  } catch (err) {
    next(err)
  }
}
const getSingleCetagory =async (req:Request,res:Response,next:NextFunction) => {
  try {
    const { id } = req.params;
    const result = await Cetagory.findById(id);
    
    res.status(200).json({
      success: true,
      statusCode: true,
      message: 'find all cetagory successfully',
      data:result
    })

  } catch (err) {
    next(err)
  }
}
export const CetagoryController = {
  createCetagory,
  getAllCetagory,
  getSingleCetagory,
  updateCetagory,
}
