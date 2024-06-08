import JobList from "./JobList";
import Job from "./Job";
import '../styles/JobsContainer.css';
import { useState } from 'react';

export default function JobsContainer() {
    const [selectedJob, setSelectedJob] = useState(null);

    return(
        <div className = "jobs-container">
            <JobList onSelectJob={setSelectedJob}/>
            <div className="job-details-container">
                {selectedJob ? <Job job={selectedJob}/> : <h3>Select a job to see in detail</h3>}
            </div>
        </div>
    )
}