import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {setUserEmail} from '../redux/userEmail/UserEmailReducer'


const Signup = () => {
    const dispatch = useDispatch();
    const userEmail = useSelector(state => state.userEmail.userEmail)

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();
    const {firstName, lastName, email, password, confirmPassword} = userData;
    const onChange = e => setUserData({ ...userData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // TODO: hash password
        try {
            const response = await fetch(USED_IP + 'signUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({firstName, lastName, email, password, confirmPassword})
            });
            const data = await response.json();
            // if email already exists, sign in
            if (response.status === 400) {
                console.log(data.msg);
                // TODO: add real component
                if (window.confirm('Email already exists. Would you like to sign in instead?')) {
                    navigate('/Login');
                }
            } else {
                console.log('Email is available, signup successful');
                dispatch(setUserEmail(data.email));
                navigate('/MainDashboard')
            }
        } catch (err) {
            console.error('Error:', err);
        }
    };



    return (
        <div
            className='flex flex-col justify-center border-solid rounded-lg border-neutral-400 border-[1px] p-[5px] pb-[5px] w-[420px] m-[auto] mt-[200px] text-sm  min-w-[25%] max-w-[90%]'>
            <div className='mt-2 text-center'><h2 className='text-3xl'>Application Tailor</h2></div>
            <form className='my-[10px]'>
                <label className='block ml-[70px]'>
                    First name:
                    <input type="text" name="firstName" placeholder='First name' onChange={onChange} value={firstName}
                           className='m-4 ml-[63px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
                </label>
                <label className='block ml-[70px]'>
                    Last name:
                    <input type="text" name="lastName" placeholder='Second name' onChange={onChange} value={lastName}
                           className='m-4 ml-[64px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
                </label>
                <label className='block ml-[70px]'>
                    Email:
                    <input type="text" name="email" placeholder='Email' onChange={onChange} value={email}
                           className='m-4 ml-[65px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
                </label>
                <label className='block ml-[70px]'>
                    Password:
                    <input type="password" name="password" placeholder='Password' onChange={onChange} value={password}
                           className='m-4 ml-[69px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
                </label>
                <label className='block ml-[70px]'>
                    Confirm Password:
                    <input type="password" name="confirmPassword" placeholder='Confirm Password' onChange={onChange}
                           value={confirmPassword}
                           className='m-4 border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
                </label>
            </form>
            <div className='text-center'>
                <input className="mb-[10px] w-[100px] h-[35px] bg-custom-blue rounded-md text-white" type="button"
                       value="Sign up" onClick={onSubmit}/>
            </div>
        </div>
    )
}

export default Signup
