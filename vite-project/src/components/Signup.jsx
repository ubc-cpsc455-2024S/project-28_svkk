import React, {useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setUserEmail} from '../redux/userEmail/UserEmailReducer'
import {USED_IP} from "../redux/ip.js";
import '../styles/Job.css';

// const url = "http://localhost:3000/";


const Signup = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const [step, setStep] = useState(1);
    const [flag, setFlag] = useState(1);
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
            setFlag(2);
        }
    }, [location.state])

    const onEmailPasswordSubmit = async e => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const response = await fetch( USED_IP + 'signUp/checkEmail', {
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

        // regular users
        if (flag == 1) {
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
                    const token = data.token;
                    localStorage.setItem('jwtToken', token);
                    localStorage.setItem('userEmail', data.user.email);
                    navigate('/MainDashboard');
                }
            } catch (err) {
                console.error('Error:', err);
            }
        } else {
            try {
                const response = await fetch(USED_IP + 'signUp/google', {
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
                    const token = data.token;
                    localStorage.setItem('jwtToken', token);
                    localStorage.setItem('userEmail', data.user.email);
                    navigate('/MainDashboard');
                }
            } catch (err) {
                console.error('Error:', err);
            }
        }
    }


    return (
        <div className="bg-bg flex flex-col justify-center content-center h-full">
        <div
            className='flex flex-col justify-center m-auto mt-40 rounded-[35px] bg-white p-4 jobView'>
            <div className='mt-2 mb-1 text-center'><h2 className='text-3xl font-medium'>Application Tailor</h2></div>
            {step === 1 && (
                <form className=' mb-[15px]' onSubmit={onEmailPasswordSubmit}>

                    <div className="p-[30px] pb-4">
                        <div className=" relative">
                            <input 
                                type='email'
                                name='email'
                                placeholder='Email'
                                className="border p-2 pl-6 rounded-[30px]"
                                value={email}                  
                                onChange={onChange}
                                required>
                            </input>
                            <span className=" bg-white p-1 text-[11px] absolute left-5 top-[-12px]">Email*</span>
                        </div> 
                    </div>

                    <div className='p-[30px] pt-4 pb-4'>
                        <div className=" relative">
                            <input 
                                type="password" 
                                name="password" 
                                placeholder='Password' 
                                className="border p-2 pl-6 rounded-[30px]"
                                value={password} 
                                onChange={onChange}
                                required>
                            </input>
                            <span className=" bg-white p-1 text-[11px] absolute left-6 top-[-12px]">Password*</span>
                        </div>
                    </div>

                    <div className='p-[30px] pt-4'>
                        <div className=" relative">
                            <input 
                                type="password" 
                                name="confirmPassword" 
                                placeholder='Confirm Password' 
                                className="border p-2 pl-6 rounded-[30px]"
                                value={confirmPassword} 
                                onChange={onChange}
                                required>
                            </input>
                            <span className=" bg-white p-1 text-[11px] absolute left-6 top-[-12px]">Confirm Password*</span>
                        </div>
                    </div>

                    <div className='text-center'>
                        <input className="mb-[10px] w-[233px] h-[40px] bg-darkTeal hover:bg-darkTealHover rounded-[30px] text-white" type="submit" value="Next" />
                    </div>
                    
                </form>
            )}
            {step === 2 && (
                <form className='mb-[15px]' onSubmit={onNameSubmit}>
                    <div className="p-[30px] pb-4">
                        <div className=" relative">
                            <input 
                                type='text'
                                name='firstName'
                                placeholder='First Name'
                                className="border p-2 pl-6 rounded-[30px]"
                                value={firstName}                  
                                onChange={onChange}
                                required>
                            </input>
                            <span className=" bg-white p-1 text-[11px] absolute left-5 top-[-12px]">First Name*</span>
                        </div> 
                    </div>

                    <div className="p-[30px] pt-4">
                        <div className=" relative">
                            <input 
                                type='text'
                                name='lastName'
                                placeholder='Last Name'
                                className="border p-2 pl-6 rounded-[30px]"
                                value={lastName}                  
                                onChange={onChange}
                                required>
                            </input>
                            <span className=" bg-white p-1 text-[11px] absolute left-5 top-[-12px]">Last Name*</span>
                        </div> 
                    </div>
                    
                    <div className='text-center'>
                        <input className="mb-[10px] w-[233px] h-[40px] bg-darkTeal hover:bg-darkTealHover rounded-[30px] text-white" type="submit" value="Sign up" />
                    </div>
                </form>
            )}
        </div>
        </div>
    )
}

export default Signup
