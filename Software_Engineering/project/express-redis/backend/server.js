import express from "express"
import productRoutes from "./routes/product.route.js"


const app = express()
app.use(productRoutes)

app.use((err , req , res , next) => {
    console.error(err.stack)
    const status = err.statusCode || 500
    res.status(status).json({ message: err.message || "Internal server error"})
})


const PORT = process.env.PORT || 5000






app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
