import Product from "../models/product.js"
import category from "../models/category.js"


export const createProduct = async (req, res) => {

    const {name, description, price, stock, category, image} = req.body

    // don't forget to fix the image file upload with multer later


    try {
        if(!category || !name || !price || !description ) return res.status(400).json({message: "All fields are required"})

        const product = await Product.create({name, description, price, stock, category, image})

        return res.status(201).json({message: "Product created successfully", product})
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"})
    }
}


export const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find().populate("category")
        return res.status(200).json({products})
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"})
    }
}


export const getSingleProduct = async (req, res) => {
    const {productId} = req.params
    try {
        const product = await Product.findById(productId).populate("category")

        if(!product) return res.status(404).json({message: "Product not found"})

        return res.status(200).json({product})
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"})
    }
}

export const updateProduct = async (req, res) => {
    const {productId} = req.params
    const {name, description, price, stock, category, image} = req.body
    try {
        const product = await Product.findById(productId).populate("category")

        if(!product) return res.status(404).json({message: "Product not found"})

        const updatedProduct = await Product.findByIdAndUpdate(productId, {name, description, price, stock, category, image}, {new: true}).populate("category")
        return res.status(200).json({message: "Product updated successfully", product: updatedProduct})
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"})
    }
}


export const deleteProduct = async (req, res) => {
    const {productId} = req.params
    try {
        // const product = await Product.findById(productId).populate("category")

        // if(!product) return res.status(404).json({message: "Product not found"})

        await Product.findByIdAndDelete(productId)
        return res.status(200).json({message: "Product deleted successfully"})
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"})
    }
}