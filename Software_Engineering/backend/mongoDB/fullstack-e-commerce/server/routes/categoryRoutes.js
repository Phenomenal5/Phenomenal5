import express from "express"
import { createCategory, deleteCategory, getAllCategory, updateCategory } from "../controllers/categoryController.js";
import { protect } from "../middlewares/authMiddlewares.js";
import { authorize } from "../middlewares/authorizeMiddlewares.js";



const router = express.Router()


router.get('/categories', getAllCategory)
router.post('/add-category', protect, authorize, createCategory)
router.put('/update-category/:categoryId', protect, authorize(["admin"]), updateCategory)
router.delete('/delete-category/:categoryId', protect, authorize(["admin"]), deleteCategory)







export default router;