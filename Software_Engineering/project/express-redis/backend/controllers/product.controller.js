import { getProducts } from "../services/product.service.js"
import redis from "../config/redis.js"


export const getAllProducts = async (req, res, next) => {
    try {
         const cachKey = 'products'

    const cached = await redis.get(cachKey)

    console.log(cached)
    if (cached) {
        console.log("CACHE HIT")
        return res.json(JSON.parse(cached))
    }

    console.log('CACHE MISS')

    const products = await getProducts()
    if(!products) {
        const error = new Error('Products not found')
        error.statusCode = 404
        return next(error)
    }

    await redis.set(cachKey, JSON.stringify(products) , 'EX' , 20)
    res.json(products)
    } catch (error) {
        next(error)
    }
}