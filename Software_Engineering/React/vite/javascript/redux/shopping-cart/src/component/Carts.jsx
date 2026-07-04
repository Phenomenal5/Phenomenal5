import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/action'

const Carts = () => {
    const dispatch = useDispatch()
    const carts = useSelector(state => state.cart)
    console.log(carts)
    return (
        <div>
            <div>
                <h2 className="text-xl mb-2 text-center">CART</h2>
                <span>total price: $ {carts.reduce((acc, item) => acc + (item.price * item.quantity), 0)}</span>
            </div>
            {carts.map((item) => (
                <div key={item.id} className="mb-2 flex justify-between border p-2">
                <img src={item.image} alt={item.title} width={100} />
                <span className="w-1/2">{item.title}</span>
                <span>{item.quantity}</span>
                <span>$ {item.price}</span>
                <div className="space-x-2">
                    <button onClick={() => dispatch(increaseQuantity(item))}>➕</button>
                    <button className="mx-4" onClick={() => dispatch(decreaseQuantity(item))}>
                    ➖
                    </button>
                    <button onClick={() => dispatch(removeFromCart(item))}>❌</button>
                </div>
                </div>
            ))}
            
        </div>
    )
}

export default Carts