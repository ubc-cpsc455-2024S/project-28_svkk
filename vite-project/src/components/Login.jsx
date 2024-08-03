import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setUserEmail} from '../redux/userEmail/UserEmailReducer'
import {GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";
import {USED_IP} from "../redux/ip.js";

const url = "http://localhost:3000/";


const Login = () => {
    const dispatch = useDispatch();
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
            const response = await fetch( USED_IP + 'login', {
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

    const onGoogleSuccess = async (response) => {
        console.log("Google login success: ", response);
        const token = response.credential;
        try {
            const res = await fetch( USED_IP + 'login/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({token})
            });

            const data = await res.json()
            if (res.status === 200) {
                dispatch(setUserEmail(data.email))
                navigate('/MainDashboard')
            } else if (res.status == 400) {
                navigate('/Signup', { state: { email: data.email } });
            } else {
                alert(data.msg)
            }
        } catch (error) {
            console.log("Error: ", error);
        }

    }

    const onGoogleFailure = (error) => {
        console.log("failed to log in: ", error);
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
              <label className='block ml-[70px]'>
                  Password:
                  <input type="password" name="password" placeholder='Password' value={password} onChange={onChange}
                         className='m-4 border-solid rounded-lg border-neutral-500 border-[1px] p-[5px]'/>
              </label>
          </div>
          <div className='text-center'>
              <input className="mb-[10px] w-[100px] h-[35px] bg-custom-blue rounded-md text-white" type="button"
                     value="Log in" onClick={onSubmit}/>
          </div>
          <div className={'text-center mb-4'}>
              <GoogleOAuthProvider clientId={'869398522193-9j7n8el0o9p36t14mvck3f1vg0f91l4q.apps.googleusercontent.com'}>
                  <GoogleLogin
                      onSuccess={onGoogleSuccess}
                      onError={onGoogleFailure}
                  />
              </GoogleOAuthProvider>
          </div>
          <div className="flex justify-center items-center space-x-20">
              <Link to="/Signup">
                  <p className="text-center mt-2">
                      Not a member?
                      <a className="text-neutral-500 cursor-pointer hover:underline"> Sign up</a>
                  </p>
              </Link>
          </div>
      </div>
  )
}

export default Login
