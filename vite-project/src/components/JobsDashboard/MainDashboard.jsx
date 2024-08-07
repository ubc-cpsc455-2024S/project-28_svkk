import {useDispatch, useSelector} from "react-redux";
import JobsContainer from "./JobsContainer";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import {setUserEmail} from "../../redux/userEmail/UserEmailReducer.js";
import {getTailoredCoverLettersAsync} from "../../redux/tailoredCoverLetters/thunk.js";
import {getCoverLettersAsync } from '../../redux/coverLetters/thunk.js';

export default function MainDashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const userEmail = useSelector(state => state.userEmail.userEmail)
    const coverLetters = useSelector(state => state.coverLetterList.coverLetters);
    const tailoredCoverLetters = useSelector(state => state.tailoredCoverLetterList.tailoredCoverLetters);

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        try {
            const decoded = jwtDecode(token);
            if (decoded && new Date(decoded.exp * 1000) > new Date()) {
                dispatch(setUserEmail(decoded.email));
                dispatch(getCoverLettersAsync({email: userEmail}));
                dispatch(getTailoredCoverLettersAsync({email: userEmail}))
            } else {

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

    }, [navigate, dispatch, userEmail]);

    const [selectedJob, setSelectedJob] = useState(null);

    return (
        <div className="main-dashboard">
            <Navbar search={true} selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
            {userEmail ? (
            <JobsContainer coverLetters={coverLetters} tailoredCoverLetters={tailoredCoverLetters} selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}