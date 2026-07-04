import express from "express";


const app = express()
app.use(express.json())
const port = process.env.PORT

// Create Products list

let products = [
    {
        id: 1,
        name: "earbud",
        price: 20,
        category: "accessory"
    },
    {
        id: 2,
        name: "laptop",
        price: 250,
        category: "gadget"
    },
    {
        id: 3,
        name: "book",
        price: 10,
        category: "stationary"
    },
]

// Read all products

app.get("/api/products", (req, res) => {
    res.status(200).json({mesage : "get products successfully", products})
})

// GEt product by id

app.get("/api/products/:id", (req, res) => {
    const productId = Number(req.params.id)
    const product = products.find(product => product.id === productId)
    if(!product) return res.status(404).json({message: "product not found"})
    
    res.status(200).json({ message: "get product successfully", product})
})


// Create new product
app.post("/api/products", (req, res) => {
    const {name, price, category} = req.body
    if (!name || !price || !category) return res.status(404).json({message: "All field are required"})

    const newProduct = {
        id: products.length + 1,
        name,
        price,
        category
    }

    products.push(newProduct)
    res.status(201).json({message: "product created successfully", products})
})


// Update product

app.put("/api/products/:id", (req, res) => {
    const productId = Number(req.params.id)
    const {name, price, category} = req.body
    const existingProduct = products.find(product => product.id === productId)

    if(!existingProduct) return res.status(404).json({ message: "Product Not Found"})

        if(name) existingProduct.name = name
        if(price) existingProduct.price = price
        if(category) existingProduct.category = category

        res.status(200).json({ message: "Product updated successfully", products})
})


// Delete product
// app.delete("/api/products/:id", (req, res) => {
//     const productId = Number(req.params.id)
//     const existingProduct = products.find(product => product.id === productId)

//     if(!existingProduct) return res.status(404).json({ message: "Product Not Found"})

//     products = products.filter(product => product.id !== productId)
//     res.status(200).json({ message: "Successful", products})
// })


app.delete("/api/products/:id", (req, res) => {
    const productId = Number(req.params.id)
    const index = products.findIndex(product => product.id === Number(productId))

    if(index === -1) return res.status(404).json({ message: "Product Not Found"})
    
    const deletedProduct = products.splice(index, 1)
    res.status(200).json({ message: "Product deleted successfully", product: deletedProduct[0] })
})


app.listen(port, () => {
    console.log("Server running on port: " + port)
})