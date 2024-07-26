import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import MainDashboard from './MainDashboard';
import Signup from './Signup';
import { useDispatch, useSelector } from 'react-redux';
import {setUserEmail} from '../redux/userEmail/UserEmailReducer'
import {USED_IP} from "../redux/ip.js";

const Login = () => {

    const dispatch = useDispatch();
    const userEmail = useSelector(state => state.userEmail.userEmail)

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const {email, password} = userData;
    const onChange = e => setUserData({ ...userData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const response = await fetch(USED_IP + 'login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            });
            const data = await response.json();
            // successful
            if (response.status === 200) {
                dispatch(setUserEmail(data.email))
                navigate('/MainDashboard')
            } else {
                alert(data.msg)
            }
        } catch (err) {
            console.error('Error:', err);
        }
    }


  return (
      <div
          className='flex flex-col border-solid rounded-lg border-neutral-400 border-[1px] p-[5px] pb-[15px] w-[420px] m-[auto] mt-[200px]'>
          <div className='mt-2 text-center'><h2 className='text-3xl'>Application Tailor</h2></div>
          <div className='flex flex-col h-[200px] justify-center'>
              <label className='block ml-[70px]'>
                  Email:
                  <input type="text" name="email" placeholder='Email' value={email} onChange={onChange}
                         className='m-4 border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
              </label>
              {/* add password validation*/}
              {/* TODO: add remember password */}
              <label className='block ml-[70px]'>
                  Password:
                  <input type="password" name="password" placeholder='Password' value={password} onChange={onChange}
                         className='m-4 border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
              </label>
          </div>
          {/*<div className='text-center'>*/}
          {/*  <Link to="/MainDashboard"><input className="mb-[10px] w-[100px] h-[35px] bg-custom-blue rounded-md text-white" type="button" value="Log in"/></Link>*/}
          {/*</div>*/}
          <div className='text-center'>
              <input className="mb-[10px] w-[100px] h-[35px] bg-custom-blue rounded-md text-white" type="button"
                     value="Log in" onClick={onSubmit}/>
          </div>

          <Link to="/Signup"><p className='text-center'>Not already a member? <a
              className='text-neutral-500 cursor-pointer'>Sign up</a></p></Link>
      </div>
  )
}

export default Login
