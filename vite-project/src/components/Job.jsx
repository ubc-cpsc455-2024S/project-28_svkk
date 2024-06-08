import React from "react";

export default function Job({job}) {
    // console.log({job})
    return(
        <div className="job-details">
            <div className="job-field">
                <b>Job Title: </b> {job.jobTitle}
            </div>
            <div className="job-field">
                <b>Company: </b> {job.company}
            </div>
            <div className="job-field">
               <b>Job Type: </b> {job.jobType}
            </div>
            <div className="job-field">
                <b>Location: </b> {job.location}
            </div>
            <div className="job-field">
                <b>Date Applied: </b> {job.dateApplied}
            </div>
            <div className="job-field">
                <b>Duration: </b> {job.duration}
            </div>
           
            <b><div className="job-field" a>Click <a onClick = {() => {
                window.open(job.link)
            }}><u>here</u></a> for link to job posting</div></b>

            <div className="job-field"><b>Cover Letter Used:</b> {job.coverLetterUsed}</div>
        </div>
    );
}