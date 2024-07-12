import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import { deleteJobAsync, getJobsAsync } from "../redux/jobs/thunks";

export default function JobList({ onSelectJob, selectForm, setSelectForm, selectedJob }) {
    const jobs = useSelector(state => state.jobList.jobs);
    const userEmail = useSelector(state => state.userEmail.userEmail);

    const dispatch = useDispatch();
    const [selectedJobId, setSelectedJobId] = useState(null);
    const handleJobClick = (job) => {
        setSelectedJobId(job._id);
        onSelectJob(job);
    }



    useEffect(() => {
        console.log('dispatching getjobsasync with useremail: ', userEmail);
        dispatch(getJobsAsync(userEmail));
    }, []);

  
    return(
        <div className="job-list-container">
            <div className="sort-by">Sort by: <span className="date-applied">Date Applied</span>
            </div>
        {
            jobs.map((j) => (
                <section key={j._id} className={`job-item ${selectedJobId === j._id ? 'selected' : ''}`} onClick={() => handleJobClick(j)}>        
                    <div><b>{j.jobTitle}</b></div>
                    <div>{j.company}</div>
                    <div>Date Applied: {j.dateApplied}</div>                   
                </section>
            ))  
        }
        <div className="job-actions">
            <span className="add-job" onClick={() => {setSelectForm(true); onSelectJob(null)}}>Add Job</span>
            <span className="delete-job" onClick={() => {   
                                                            if (selectedJob) {
                                                                console.log("dispatching delete with email: " + userEmail)
                                                                let id = selectedJob._id
                                                                dispatch(deleteJobAsync({id, userEmail})); 
                                                                setSelectForm(false); 
                                                                onSelectJob(null);
                                                            } else {
                                                                console.log("No job selected")
                                                            }
                                                        }}>Delete Job</span>
        </div>

        </div>
        
    );
}