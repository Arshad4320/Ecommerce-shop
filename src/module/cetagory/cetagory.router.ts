import { Router } from "express";
import { verifyCeatogory } from "./cetagory.validation";
import { CetagoryController } from "./cetagory.controller";


const router = Router()
router.post('/create', verifyCeatogory, CetagoryController.createCetagory)
router.put('/update/:id', verifyCeatogory, CetagoryController.updateCetagory)
router.get('/get-cetagorys', CetagoryController.getAllCetagory)
router.get('/get-cetagory/:id', CetagoryController.getSingleCetagory)

export default router