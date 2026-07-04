import express from "express"
import { getProfile, getUserById, getUsers, updataProfile, updatePassword } from "../controllers/UserControllers.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";
import { upload } from "../middleware/upload.js";


const router = express.Router();



// router.get("/:id", getUserById)





// private route
router.get('/me', protect, getProfile)
router.put('/update-me', protect, upload.single("photo"), updataProfile)
router.put('/update-password', protect, updatePassword)




// Admin endpoints
router.get("/", protect, authorize("admin"), getUsers)




export default router;