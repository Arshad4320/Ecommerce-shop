import { Router } from "express";
import userRouter from "../module/user/user.index";
import cetagoryRouter from "../module/cetagory/cetagory.index";
import productRouter from './../module/product/product.index';

const router = Router();

router.use('/user', userRouter)
router.use('/cetagory', cetagoryRouter)
router.use('/product', productRouter)

export default router;