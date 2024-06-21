import JobsContainer from "./JobsContainer";
import Navbar from "./Navbar";
import CoverLetterPage from "./CoverLetterPage";
import Login from "./Login";
import { useState } from "react";

export default function MainDashboard() {
    const [selectedJob, setSelectedJob] = useState(null);
    return(
        <div className="main-dashboard" >
            <Navbar selectedJob={selectedJob} setSelectedJob={setSelectedJob}/>
            <JobsContainer selectedJob={selectedJob} setSelectedJob={setSelectedJob}/>
        </div>
        
    );
}