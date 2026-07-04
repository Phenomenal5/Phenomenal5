import React , { useState , useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); // Javascript object that holds URL params or information

  const getSingleProduct = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.in/api/products/${id}`)
      const product = response.data.product;
      setProduct(product)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    getSingleProduct()
  }, [])

  if(!product){
    return <div className='text-center text-gray-500'>Loading ...</div>
  }

  return (
    <div className='w-[80%] shadow border border-gray-300 p-5 m-auto mt-10'>
      <img src={product.image} alt={product.title} />
      <h2 className='font-bold text-3xl mt-10'>{product.title}</h2>
      <p className='mt-5'>Description: {product.description}</p>
      <p className='mt-5'>Price: $ {product.price}</p>

    </div>
  )
}

export default ProductDetails