import { Router } from "express";
import userRouter from "../module/user/user.index";
import cetagoryRouter from "../module/cetagory/cetagory.index";
import productRouter from './../module/product/product.index';
import uploadRouter from '../module/fileUpload'
import cartRouter from '../module/cart/cart.index'

const router = Router()

router.use('/user', userRouter)
router.use('/category', cetagoryRouter)
router.use('/product', productRouter), router.use('/file', uploadRouter)
router.use('/cart', cartRouter)
export default router;