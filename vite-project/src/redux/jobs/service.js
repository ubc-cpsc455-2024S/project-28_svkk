import {USED_IP} from "../ip.js";

const getJobs = async (userEmail) => {
    const response = await fetch(USED_IP + `jobs/${userEmail}`, {
      method: 'GET'
    });

    return response.json();
};

const getJobById = async (id) => {
    const response = await fetch(USED_IP + `jobs/${id}`, {
        method: 'GET'
    });
    return response.json();
}

const getJobsDateAppliedEarliestToLatest = async (userEmail) => {
    const response = await fetch(USED_IP + `jobs/${userEmail}/earliest-latest`, {
      method: 'GET'
    });

    return response.json();
};

const getJobsDateAppliedLatestToEarliest = async (userEmail) => {
    const response = await fetch(USED_IP + `jobs/${userEmail}/latest-earliest`, {
      method: 'GET'
    });

    return response.json();
};



const updateJob = async ({id, fields}) => {
    const response = await fetch(USED_IP + `jobs/${id}`, {
        method: 'PUT', 
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(fields)
    });

    const data = await response.json();


    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
}

const addJob = async({title, company, type, location, date, duration, link, status, cv, tcv, userEmail, tags}) => {

    const response = await fetch(USED_IP + 'jobs/addJob', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            jobTitle: title,
            company: company,
            jobType: type,
            location: location,
            dateApplied: date,
            duration: duration,
            link: link,
            status: status,
            coverLetterUsed: cv,
            tailoredCoverLetterUsed: tcv,
            userEmail: userEmail,
            tags: tags
        })
    });

    const new_jobs = await response.json()

    return new_jobs
}

const deleteJob = async(data) => {

    const response = await fetch(USED_IP + `jobs/delete/${data.id}`, {
        method: 'POST',
        headers: {
         "content-type": "application/json" 
        },
        body: JSON.stringify({"email": data.userEmail})
    });

    const new_jobs = await response.json()
    return new_jobs
}

const searchJobs = async(data) => {
    const response = await fetch(USED_IP + `jobs/search/${data.filter}`, {
        method: 'POST',
        headers: {
            "content-type": "application/json" 
        },
        body: JSON.stringify({"email": data.userEmail})
    });

    const new_jobs = await response.json()

    return new_jobs
}

const filterTags = async(data) => {
    const response = await fetch(USED_IP + `jobs/tag/${data.tagFilters}`, {
        method: 'POST',
        headers: {
            "content-type": "application/json" 
        },
        body: JSON.stringify({"email": data.userEmail})
    });

    const new_jobs = await response.json()
    return new_jobs
}






export default {
    getJobs,
    getJobById,
    updateJob,
    addJob,
    deleteJob,
    searchJobs,
    getJobsDateAppliedEarliestToLatest,
    filterTags
}