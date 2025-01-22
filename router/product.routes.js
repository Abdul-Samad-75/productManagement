import express from "express";
import { createProduct, deleteProduct, getAllProduct } from "../controllers/product.controllers.js";

const router = express.Router()

router.get('/products', getAllProduct)
router.post('/products',createProduct)
router.delete('/products/:id',deleteProduct)


export default router