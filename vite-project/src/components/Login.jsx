import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setUserEmail} from '../redux/userEmail/UserEmailReducer'
import {GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";
import {USED_IP} from "../redux/ip.js";
import '../styles/Job.css';

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
                const token = data.token;
                localStorage.setItem('jwtToken', token);
                localStorage.setItem('userEmail', data.user.email);
                dispatch(setUserEmail(data.user.email))
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
                const token = data.token;
                localStorage.setItem('jwtToken', token);
                localStorage.setItem('userEmail', data.user.email);
                dispatch(setUserEmail(data.user.email))
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
      <div className="bg-bg flex flex-col justify-center content-center h-full">
      <div className='flex flex-col m-auto mt-40 rounded-[35px] bg-white p-4 jobView'>
          <div className='mt-2 mb-4 text-center'><h2 className='text-3xl font-medium'>Application Tailor</h2></div>
          <div className='flex flex-col h-[200px] justify-center content-start'>
            
                <div className="p-[30px] pb-4">
                    <div className=" relative">
                        <input 
                            type='text'
                            name='email'
                            placeholder='Email'
                            className="border p-2 pl-6 rounded-[30px]"
                            value={email}                  
                            onChange={onChange}>
                        </input>
                        <span className=" bg-white p-1 text-[11px] absolute left-5 top-[-12px]">Email*</span>
                    </div> 
                </div>

              <div className='p-[30px] pt-4'>
                <div className=" relative">
                    <input 
                        type="password" n
                        name="password" 
                        placeholder='Password' 
                        className="border p-2 pl-6 rounded-[30px]"
                        value={password} 
                        onChange={onChange}></input>
                    <span className=" bg-white p-1 text-[11px] absolute left-6 top-[-12px]">Password*</span>
                </div>
              </div>
            
              <div className='text-center'>
                <input className="mb-[10px] w-[233px] h-[40px] bg-darkTeal hover:bg-darkTealHover rounded-[30px] text-white pb-2 pt-2" type="button"
                        value="Log in" onClick={onSubmit}/>
              </div>
          </div>

          <div className='flex justify-center p-6'>
          <div className={'text-center'}>
              <GoogleOAuthProvider clientId={'869398522193-9j7n8el0o9p36t14mvck3f1vg0f91l4q.apps.googleusercontent.com'}>
                  <GoogleLogin
                      onSuccess={onGoogleSuccess}
                      onError={onGoogleFailure}
                  />
              </GoogleOAuthProvider>
          </div>
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
      </div>

  )
}

export default Login
