import { Router } from "express";
import { verifyCeatogory } from "./cetagory.validation";
import { CetagoryController } from "./cetagory.controller";


const router = Router()
router.post('/create', verifyCeatogory, CetagoryController.createCetagory)
router.put('/update/:id', verifyCeatogory, CetagoryController.updateCetagory)
router.get('/get-category', CetagoryController.getAllCetagory)
router.get('/get-category/:id', CetagoryController.getSingleCetagory)

export default router