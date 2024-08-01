import React, {useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setUserEmail} from '../redux/userEmail/UserEmailReducer'
import {USED_IP} from "../redux/ip.js";

const Signup = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: location.state?.email || '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();
    const {firstName, lastName, email, password, confirmPassword} = userData;
    const onChange = e => setUserData({ ...userData, [e.target.name]: e.target.value });

    //skip to step 2 if email is google
    useEffect(() => {
        if (location.state?.email) {
            setStep(2);
        }
    }, [location.state])

    const onEmailPasswordSubmit = async e => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const response = await fetch( USED_IP+ 'signUp/checkEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });
            if (response.status === 400) {
                if (window.confirm('Email already exists. Would you like to sign in instead?')) {
                    navigate('/Login');
                }
            } else {
                setStep(2);
            }
        } catch (err) {
            console.error('Error:', err);
        }

    }

    // applied when user done making changes
    const onNameSubmit = async e => {
        e.preventDefault();
        try {
            const response = await fetch(USED_IP + 'signUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({firstName, lastName, email, password})
            });
            const data = await response.json();
            if (response.status === 400) {
                alert(data.msg);
            } else {
                dispatch(setUserEmail(data.email));
                navigate('/MainDashboard');
            }
        } catch (err) {
            console.error('Error:', err);
        }
    }

    return (
        <div
            className='flex flex-col justify-center border-solid rounded-lg border-neutral-400 border-[1px] p-[5px] pb-[5px] w-[420px] m-[auto] mt-[200px] text-sm  min-w-[25%] max-w-[90%]'>
            <div className='mt-2 text-center'><h2 className='text-3xl'>Application Tailor</h2></div>
            {step === 1 && (
                <form className='my-[10px]' onSubmit={onEmailPasswordSubmit}>
                    <label className='block ml-[70px]'>
                        Email:
                        <input type="text" name="email" placeholder='Email' onChange={onChange} value={email}
                               className='m-4 ml-[65px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]' required />
                    </label>
                    <label className='block ml-[70px]'>
                        Password:
                        <input type="password" name="password" placeholder='Password' onChange={onChange} value={password}
                               className='m-4 ml-[69px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]' required />
                    </label>
                    <label className='block ml-[70px]'>
                        Confirm Password:
                        <input type="password" name="confirmPassword" placeholder='Confirm Password' onChange={onChange}
                               value={confirmPassword}
                               className='m-4 border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]' required />
                    </label>
                    <div className='text-center'>
                        <input className="mb-[10px] w-[100px] h-[35px] bg-custom-blue rounded-md text-white" type="submit" value="Next" />
                    </div>
                </form>
            )}
            {step === 2 && (
                <form className='my-[10px]' onSubmit={onNameSubmit}>
                    <label className='block ml-[70px]'>
                        First name:
                        <input type="text" name="firstName" placeholder='First name' onChange={onChange} value={firstName}
                               className='m-4 ml-[63px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]' required />
                    </label>
                    <label className='block ml-[70px]'>
                        Last name:
                        <input type="text" name="lastName" placeholder='Last name' onChange={onChange} value={lastName}
                               className='m-4 ml-[64px] border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]' required />
                    </label>
                    <div className='text-center'>
                        <input className="mb-[10px] w-[100px] h-[35px] bg-custom-blue rounded-md text-white" type="submit" value="Sign up" />
                    </div>
                </form>
            )}
        </div>
    )
}

export default Signup
