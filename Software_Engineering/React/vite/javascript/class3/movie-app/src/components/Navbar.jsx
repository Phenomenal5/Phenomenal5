import React, { useState } from 'react'
import Logo from '../assets/movie-app-logo.jpg'

const Navbar = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (event) => {
    const value = event.target.value
    setInputValue(value);
    props.search(value);
  }


  return (
    <nav>
        <div className='logo'>
            <img src={Logo} alt="" width={70}/>
        </div>
        <div>
          <input type="text" className='border border-gray-200' onChange = {handleInput} value = {inputValue}/>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar