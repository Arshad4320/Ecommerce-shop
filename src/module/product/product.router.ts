import { Router } from "express";
import { productController } from "./product.controller";
import { verifyCreateProduct, verifyUpdateProduct } from "./product.validation";


const router = Router()

router.post('/create', verifyCreateProduct, productController.createProduct)
router.get('/get-products',productController.getProduct)
router.get('/get-product/:id',productController.getSingleProduct),
router.get('/get-product-cetagory/:id',productController.getProductByCetagory),
router.put('/update-product/:id',verifyUpdateProduct ,productController.updateProduct)
router.delete('/delete-product/:id',productController.deleteProduct)

export default router;