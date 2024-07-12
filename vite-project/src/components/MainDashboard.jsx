import { useDispatch, useSelector } from "react-redux";
import JobsContainer from "./JobsContainer";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

export default function MainDashboard() {

    const userEmail = useSelector(state => state.userEmail.userEmail)
    const dispatch = useDispatch();

    useEffect(() => {
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