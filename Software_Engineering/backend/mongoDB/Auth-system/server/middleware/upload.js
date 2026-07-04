import multer from 'multer'
import path from 'path'



const storage = multer.diskStorage({
    destination : path.resolve('public/uploads/profile'),
    filename : (req , file , cb) => {
        const uniqueExt = path.extname(file.originalname)
        cb(null , `user-${Date.now()}${uniqueExt}`)
    }
})

export const upload = multer({
    storage,
    limits : {
        fileSize : 1024 * 1024 * 5 // 5MB
    }
})
