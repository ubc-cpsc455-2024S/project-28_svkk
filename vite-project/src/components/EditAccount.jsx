import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {USED_IP} from "../redux/ip.js";
import {useSelector, useDispatch} from "react-redux";
import {jwtDecode} from "jwt-decode";
import {setUserEmail} from "../redux/userEmail/UserEmailReducer.js";
const url = "http://localhost:3000/";


const EditAccount = () => {
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState(null);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const [isGoogleUser, setIsGoogleUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    const email = useSelector(state => state.userEmail.userEmail)

    // trigger on component mount
    useEffect( () => {
        const token = localStorage.getItem("jwtToken");
        try {
            const decoded = jwtDecode(token);
            if (decoded && new Date(decoded.exp * 1000) > new Date()) {
                dispatch(setUserEmail(decoded.email));
                if (email !== "nothing") {
                    fetchUserData(email);
                }
            } else {
                console.log("expired token");
                localStorage.removeItem('jwtToken');
                localStorage.removeItem('userEmail');
            }
        } catch (error) {
            console.error('Failed to decode JWT:', error);
            localStorage.removeItem('jwtToken');
            localStorage.removeItem('userEmail');
        }
    }, [email, dispatch]);

    // grab user info ,, set google user
    const fetchUserData = async (email) => {
        try {
            console.log("fetching with this email: ", email);
            const response = await fetch((USED_IP + 'editAccount/getUser'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });
            if (response.ok) {
                const data = await response.json();
                setIsGoogleUser(data.isGoogleUser);
                // if google user, set user info to skip verification
                if (data.isGoogleUser) {
                    setUserData({
                        email: data.email,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        password: ''
                    });
                }
            } else {
                const error = await response.json();
                setMessage(error.msg || 'User not found.');
            }
        } catch (err) {
            console.error('Error:', err);
            setMessage('An error occurred while fetching user data.');
        } finally {
            setIsLoading(false);
        }
    }

    const handleVerification = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await fetch(USED_IP + 'editAccount/getUser/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            if (response.ok) {
                setMessage('Account verified');
                const data = await response.json();
                setUserData({
                    email: data.email,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    password: ''
                });
            } else {
                const errorData = await response.json();
                setMessage(errorData.msg || 'Account not verified');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred while searching for the user.');
        }

    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        let updatedData = { ...userData};

        if (!updatedData.password) {
            delete updatedData.password;
        }

        try {
            const response = await fetch(USED_IP + 'editAccount/updateUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            });
            if (response.ok) {
                setMessage('User information updated successfully.');
                setTimeout(() => {
                    navigate('/MainDashboard');
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
                const response = await fetch(USED_IP + 'editAccount/deleteUser', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email: email})
                });
                if (response.ok) {
                    setMessage('User account deleted successfully.');
                    setUserData(null);
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

    // ChatGpt helped me with styling using tailwind
    return (
        <div className="bg-bg flex flex-col justify-center content-center h-full">
        <div className='flex flex-col justify-center m-auto mt-40 rounded-[35px] bg-white p-4 jobView'>
            <div className='mt-2 text-center'><h2 className='text-3xl font-medium'>Edit Account</h2></div>
            {isLoading ? ( // Show loading indicator
                <p className='text-center'>Loading...</p>
            ) : (
                !isGoogleUser && !userData ? ( // Show verification form only for non-Google users
                    <form onSubmit={handleVerification} className='mb-[15px]'>

                    <div className="p-[30px] pb-4">
                        <div className=" relative">
                            <input 
                                name='email'
                                value={email} 
                                readOnly
                                className="border p-2 pl-6 rounded-[30px] bg-gray-100 cursor-not-allowed"
                                required>
                            </input>
                            <span className="p-1 text-[11px] absolute left-5 top-[-12px]">Email</span>
                        </div> 
                    </div>

                    <div className="p-[30px] pt-4 pb-4">
                        <div className=" relative">
                            <input 
                               type="password"
                               name="password"
                               placeholder='Enter password'
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               className="border p-2 pl-6 rounded-[30px]"
                               required>
                            </input>
                            <span className="bg-white p-1 text-[11px] absolute left-5 top-[-12px]">Password*</span>
                        </div> 
                    </div>
                        <div className='flex flex-col justify-center items-center pt-4'>
                            <Link to="/MainDashboard">
                                <button
                                    className="mb-4 w-[233px] h-[40px] bg-darkTeal hover:bg-darkTealHover rounded-[30px] text-white">
                                    Back
                                </button>
                            </Link>
                            <input
                                className="mb-[10px] w-[233px] h-[40px] bg-darkTeal hover:bg-darkTealHover rounded-[30px] text-white"
                                type="submit"
                                value="Verify Password"
                            />
                        </div>
                    </form>
                ) : (
                    <form onSubmit={handleUpdate} className='mb-[15px]'>
                        <div className="p-[30px] pb-4">
                            <div className=" relative">
                                <input 
                                    type="text"
                                    name="firstName"
                                    placeholder= "First Name"
                                    value={userData?.firstName || ''}
                                    onChange={onChange}
                                    className="border p-2 pl-6 rounded-[30px]"
                                    required>
                                </input>
                                <span className="bg-white p-1 text-[11px] absolute left-5 top-[-12px]">First Name*</span>
                            </div> 
                        </div>

                        <div className="p-[30px] pb-4 pt-4">
                            <div className=" relative">
                                <input 
                                    type="text"
                                    name="lastName"
                                    placeholder= 'last name'
                                    value={userData?.lastName || ''}
                                    onChange={onChange}
                                    className="border p-2 pl-6 rounded-[30px]"
                                    required>
                                </input>
                                <span className="p-1 bg-white text-[11px] absolute left-5 top-[-12px]">Last Name*</span>
                            </div> 
                        </div>

                        <div className="p-[30px] pb-4 pt-4">
                            <div className=" relative">
                                <input 
                                    name="email"
                                    value={userData?.email || ''} // Use optional chaining to prevent null access
                                    readOnly
                                    className="border p-2 pl-6 rounded-[30px] bg-gray-100 cursor-not-allowed">
                                </input>
                                <span className="p-1 text-[11px] absolute left-5 top-[-12px]">Email</span>
                            </div> 
                        </div>

                        
                        {!isGoogleUser && (
                            <div className="p-[30px] pb-6 pt-4">
                            <div className=" relative">
                                <input 
                                    type="password"
                                    name="password"
                                    placeholder='Enter new password'
                                    value={userData?.password || ''} // Use optional chaining to prevent null access
                                    onChange={onChange}
                                    className="border p-2 pl-6 rounded-[30px]">
                                </input>
                                <span className="p-1 bg-white text-[11px] absolute left-5 top-[-12px]">New Password</span>
                            </div> 
                        </div>        
                        )}
                        <div className='flex flex-col justify-center items-center pt-4'>
                            <button
                                type="button"
                                className="mb-4 w-[233px] h-[40px] bg-red hover:bg-redHover rounded-[30px] text-white"
                                onClick={handleDelete}
                            >
                                Delete Account
                            </button>
                            <input
                                className="mb-4 w-[233px] h-[40px] bg-green hover:bg-greenHover rounded-[30px] text-white"
                                type="submit"
                                value="Save Changes"
                            />
                        </div>
                    </form>
                )
            )}
            {message && <p className='text-center'>{message}</p>}
        </div>
        </div>
    );
};

export default EditAccount;
