import { Router } from 'express'
import { verifyCart } from './cart.validation'
import { CartController } from './cart.controller'
import { verifyJwt } from '../../middleware/verifyJwt'

const router = Router()
router.post('/create-cart', verifyJwt, verifyCart, CartController.createCart)
router.put('/update-cart/:id', verifyJwt, CartController.updateCart)
router.get('/get-cart', verifyJwt, CartController.getCart)
router.delete('/delete-cart/:id', CartController.deleteCart)

export default router
