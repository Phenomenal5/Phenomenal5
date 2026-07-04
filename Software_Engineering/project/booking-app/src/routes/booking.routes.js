import express from "express"
import { createBooking, getBooking } from "../controllers/booking.controller.js"
import { authProtect } from "../middleware/authMiddleware.js"



const router = express.Router()



router.post('/create', authProtect, createBooking )
router.post('/', authProtect, getBooking )


export default router