import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const cart = useSelector(state => state.cart)

    return (
        <nav className="flex justify-between p-4 bg-gray-500 items-center">
        <Link to="/">
            <h1>STYLEBUY</h1>
        </Link>
        <Link to="/shoppingCart">
            <span>{cart.length}</span>
            <ShoppingCart />
        </Link>
        </nav>
    );
};

export default Navbar