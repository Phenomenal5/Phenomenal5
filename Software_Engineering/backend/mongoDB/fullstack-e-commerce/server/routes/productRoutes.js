import express from "express"
import { createProduct, deleteProduct, getAllProduct, getSingleProduct, updateProduct } from "../controllers/productController.js";
import { protect } from "../middlewares/authMiddlewares.js";
import { authorize } from "../middlewares/authorizeMiddlewares.js";



const router = express.Router()


router.get('/products', getAllProduct)
router.get('/getSingleProduct/:productId', protect, authorize(["admin"]),getSingleProduct)
router.post('/create-product', protect, authorize(["admin"]), createProduct)
router.put('/update-product/:productId', protect, authorize(["admin"]), updateProduct)
router.delete('/delete-product/:productId', protect, authorize(["admin"]), deleteProduct)






export default router;