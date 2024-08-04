import {useDispatch, useSelector} from "react-redux";
import JobsContainer from "./JobsContainer";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import {setUserEmail} from "../../redux/userEmail/UserEmailReducer.js";

export default function MainDashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const userEmail = useSelector(state => state.userEmail.userEmail)

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        try {
            const decoded = jwtDecode(token);
            if (decoded && new Date(decoded.exp * 1000) > new Date()) {
                dispatch(setUserEmail(decoded.email));
            } else {
                console.log("expired token");
                localStorage.removeItem('jwtToken');
                localStorage.removeItem('userEmail');
                navigate("/login");
            }
        } catch (error) {
            console.error('Failed to decode JWT:', error);
            localStorage.removeItem('jwtToken');
            localStorage.removeItem('userEmail');
            navigate("/login");
        }
        console.log(userEmail)
    }, [navigate, dispatch, userEmail]);

    const [selectedJob, setSelectedJob] = useState(null);

    return (
        <div className="main-dashboard">
            <Navbar selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
            {userEmail ? (
                <JobsContainer selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}