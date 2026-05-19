import React , {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Product = () => {

    const [products , setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const getProductList = async() => {
        try {
            const response = await axios.get('https://fakestoreapi.in/api/products')
            setProducts(response.data.products)
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getProductList()
    }, [])
    if(loading){
        return <div className='text-center text-gray-500'>Loading ...</div>
    }
    return (
        <div>
            <div className='text-center'>
                <h2 className='font-bold text-3xl mt-10'>All Products</h2>
            </div>
            <div>
                <ul className='flex flex-col'>
                    {
                        products.map((product) => (
                            <li key={product.id} className='block m-5'>
                                <Link to={`/products/${product.id}`} className=' shadow border border-gray-300 p-5 m-auto mt-10'>
                                    <img src={product.image} alt={product.title} />
                                    <p className='font-bold'>{product.title}</p>
                                    <p className='text-gray-500'>Price: $ {product.price}</p>
                                </Link>
                                <button className='bg-blue-500 text-white p-2 rounded mt-2'>Add to Cart</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Product