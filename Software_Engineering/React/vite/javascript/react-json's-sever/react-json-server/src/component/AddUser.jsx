import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';

const AddUser = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const addUser = async () => {
        let data = {
            name,
            email
        }

        try {
            const response = await axios.post('http://localhost:3000/users', data)
            if(response.status === 201) {
                toast.success('user created successfully');
                localStorage.setItem('user', JSON.stringify(data))
            }
        } catch (error) {
            toast.error('error when trying to add a new user')
        }
    }

    return (
        <div className='add-user'>
        <h1>Create new user</h1>

        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>FullName</Form.Label>
                <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Youremail@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={addUser}>
            Submit
            </Button>
        </Form>
        </div>
    );
}

export default AddUser