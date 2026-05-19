import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const nameInput = (e) => {
        const nameVal = e.target.value;
        setName(nameVal);
        props.handleNameInput(nameVal);
    }

    const emailInput = (event) => {
        const value = event.target.value;
        setEmail(value);
    }

    const passwordInput = (event) => {
        const value = event.target.value;
        setPassword(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            email: 'jimba@gmail.com',
            password: 'jimba'
        }

        if (email===user.email && password === user.password) {
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/dashboard');
        }else{
            alert('Wrong credentials')
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form action="">
                <div>
                    <label htmlFor="">Name: </label>
                    <input type="Text" placeholder='Your Name' value={name} onChange={nameInput}/>
                </div>
                <div>
                    <label htmlFor="">Email: </label>
                    <input type="email"  placeholder='youremail@gmail.com' value={email} onChange={emailInput}/>
                </div>
                <div>
                    <label htmlFor="">Password: </label>
                    <input type="password" value={password} onChange={passwordInput}/>
                </div>
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login