import { PlusOutlined } from '@ant-design/icons'
import { Table , Button, Space, Modal, Input } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'


const UserManagement = () => {

    // model logic
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = (user = null) => {
        if(user){
            setEditingUser(user)
            setName(user.name)
            setEmail(user.email)
            setAddress(user.address)
        }else{
            setEditingUser(null)
            setName('')
            setEmail('')
            setAddress('')
        }
        setIsModalOpen(true);
    };
    const handleOk = async () => {
        await addUser();
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const [editingUser, setEditingUser] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    
    
    const [users, setUsers] = useState([])
    const getUsers = async () => {
        try {
            const response = await axios.get('http://localhost:3000/users')
            setUsers(response.data)

        } catch (error) {
            toast.error(error)
        }
    }

    

    const addUser = async () => {
        const data = {
            name,
            email,
            address
        }

        try {
            if(editingUser !== null) {
                await axios.put(`http://localhost:3000/users/${editingUser.id}` , data)
                toast.success('user updated successfully')
            }else if(editingUser === null) {
                const response = await axios.post('http://localhost:3000/users', data)
                if(response.status === 201) {
                    toast.success('User created successfully')
                    localStorage.setItem('user', JSON.stringify(data))
                }
            }
            
        } catch (error) {
            toast.error('error when trying to add new user')
        }
    }


    const deleteUser = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/users/${id}`)
            if(response.status === 200) {
                toast.success('User deleted successfully')
            }
            
        } catch (error) {
            toast.error('error deleting user')
        }
    }

    useEffect(() => {
        getUsers()
    } ,[])


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Button onClick={() => showModal(record)}>Edit</Button>
                <Button onClick={() => deleteUser(record.id)}>Delete</Button>
            </Space>
        ),
        }
];



    return (
        <div className='p-14'>
            <div className="flex justify-between items-center py-6">
                <h1 className='text-3xl font-semibold'>Users Management</h1>
                <Button icon={<PlusOutlined />} onClick={()=> showModal(null)}>Add User</Button>
            </div>
            <Table columns={columns} dataSource={users} />
            <Modal
            title={editingUser === null ? 'Add User': "Edit User"}
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            >
                <Input placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}/>
                <Input placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Input placeholder='Enter your address' value={address} onChange={(e) => setAddress(e.target.value)}/>
            </Modal>
        </div>
    )
}

export default UserManagement