import { useDispatch, useSelector } from "react-redux";
import JobsContainer from "./JobsContainer";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainDashboard() {

    const navigate = useNavigate()
    const userEmail = useSelector(state => state.userEmail.userEmail)
    const dispatch = useDispatch();

    useEffect(() => {
        if (userEmail === "nothing") {
            navigate("/login")
        }
        console.log(userEmail)
    }, [])

    const [selectedJob, setSelectedJob] = useState(null);
    return(
        <div className="main-dashboard" >
            <Navbar selectedJob={selectedJob} setSelectedJob={setSelectedJob}/>
            <JobsContainer selectedJob={selectedJob} setSelectedJob={setSelectedJob}/>
        </div>
        
    );
}