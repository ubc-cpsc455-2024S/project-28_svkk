import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import { getJobsAsync } from "../redux/jobs/thunks";

export default function JobList({ onSelectJob }) {
    const jobs = useSelector(state => state.jobList.jobs);
    const dispatch = useDispatch();
    const [selectedJobId, setSelectedJobId] = useState(null);
    const handleJobClick = (job) => {
        setSelectedJobId(job.id);
        onSelectJob(job);
    }

    useEffect(() => {
        dispatch(getJobsAsync());
    }, []);

  
    return(
        <div className="job-list-container">
            <div className="sort-by">Sort by: <span className="date-applied">Date Applied</span>
            </div>
        {
            jobs.map((j) => (
                <section key={j.id} className={`job-item ${selectedJobId === j.id ? 'selected' : ''}`} onClick={() => handleJobClick(j)}>        
                    <div><b>{j.jobTitle}</b></div>
                    <div>{j.company}</div>
                    <div>Date Applied: {j.dateApplied}</div>                   
                </section>
            ))  
        }
        <div className="job-actions">
            <span className="add-job">Add Job</span>
            <span className="delete-job">Delete Job</span>
        </div>

        </div>
        
    );
}