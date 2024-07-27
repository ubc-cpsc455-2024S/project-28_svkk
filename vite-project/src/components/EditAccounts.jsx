import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import {USED_IP} from "../redux/ip.js";


const EditAccounts = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState(null);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const [originalEmail, setOriginalEmail] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            const response = await fetch(USED_IP + 'editAccounts/getUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            if (response.ok) {
                const data = await response.json();
                setUserData({
                    email: data.email,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    password: '',
                    confirmPassword: ''
                });
                setOriginalEmail(data.email);
            } else {
                const errorData = await response.json();
                setMessage(errorData.msg || 'User not found.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred while searching for the user.');
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        let updatedData = { ...userData, originalEmail };

        if (!updatedData.password) {
            delete updatedData.password;
        }

        try {
            const response = await fetch(USED_IP + 'editAccounts/updateUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            });
            if (response.ok) {
                setMessage('User information updated successfully.');
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else {
                setMessage('Failed to update user information.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred while updating the user.');
        }
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this account?')) {
            try {
                const response = await fetch(USED_IP + 'editAccounts/deleteUser', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email: originalEmail})
                });
                if (response.ok) {
                    setMessage('User account deleted successfully.');
                    setUserData(null);
                    setEmail('');
                    setPassword('');
                    navigate('/Login')
                } else {
                    setMessage('Failed to delete user account.');
                }
            } catch (error) {
                console.error('Error:', error);
                setMessage('An error occurred while deleting the user.');
            }
        }
    };

    const onChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    // Chat gpt helped me with styling using tailwind
    return (
        <div className='flex flex-col border-solid rounded-lg border-neutral-400 border-[1px] p-[5px] pb-[15px] w-[420px] m-[auto] mt-[200px]'>
            <div className='mt-2 text-center'><h2 className='text-3xl'>Edit Accounts</h2></div>
            {!userData ? (
                <form onSubmit={handleSearch} className='my-[10px]'>
                    <label className='block ml-[70px]'>
                        Email:
                        <input
                            name="email"
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='m-4 border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'
                            required
                        />
                    </label>
                    <label className='block ml-[70px]'>
                        Password:
                        <input
                            type="password"
                            name="password"
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='m-4 border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'
                            required
                        />
                    </label>
                    <div className='flex justify-center items-center space-x-20'>
                        <Link to="/Login">
                            <button
                                className="mb-[10px] w-[100px] h-[35px] bg-custom-blue rounded-md text-white hover:bg-custom-blue-dark">
                                Back
                            </button>
                        </Link>
                        <input
                            className="mb-[10px] w-[100px] h-[35px] bg-custom-blue rounded-md text-white hover:bg-custom-blue-dark"
                            type="submit"
                            value="Edit"
                        />
                    </div>
                </form>
            ) : (
                <form onSubmit={handleUpdate} className='my-[10px]'>
                    <label className='block ml-[70px]'>
                        First Name:
                        <input
                            type="text"
                            name="firstName"
                            placeholder='First name'
                            value={userData.firstName}
                            onChange={onChange}
                            className='m-4 border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'
                            required
                        />
                    </label>
                    <label className='block ml-[70px]'>
                        Last Name:
                        <input
                            type="text"
                            name="lastName"
                            placeholder='Last name'
                            value={userData.lastName}
                            onChange={onChange}
                            className='m-4 border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'
                            required
                        />
                    </label>
                    <label className='block ml-[70px]'>
                        Email (optional):
                        <input
                            name="email"
                            placeholder='Enter new email'
                            value={userData.email}
                            onChange={onChange}
                            className='m-4 border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'
                        />
                    </label>
                    <label className='block ml-[70px]'>
                        Password (optional):
                        <input
                            type="password"
                            name="password"
                            placeholder='Enter new password'
                            value={userData.password}
                            onChange={onChange}
                            className='m-4 border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'
                        />
                    </label>
                    <div className='flex justify-center space-x-20'>
                        <button
                            type="button"
                            className="mb-[10px] w-[120px] h-[50px] bg-red-500 rounded-md text-white"
                            onClick={handleDelete}
                        >
                            Delete Account
                        </button>
                        <input
                            className="mb-[10px] w-[120px] h-[50px] bg-custom-blue rounded-md text-white"
                            type="submit"
                            value="Save Changes"
                        />
                    </div>
                </form>
            )}
            {message && <p className='text-center'>{message}</p>}
        </div>
    );
};

export default EditAccounts;
