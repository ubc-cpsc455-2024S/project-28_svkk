const getJobs = async (userEmail) => {
    const response = await fetch(`http://localhost:3000/jobs/${userEmail}`, {
      method: 'GET'
    });
    // console.log('fetched response from jobs get request');
    return response.json();
};

const getJobsDateAppliedEarliestToLatest = async (userEmail) => {
    const response = await fetch(`http://localhost:3000/jobs/${userEmail}/earliest-latest`, {
      method: 'GET'
    });
    // console.log('fetched response from jobs get request');
    return response.json();
};

const getJobsDateAppliedLatestToEarliest = async (userEmail) => {
    const response = await fetch(`http://localhost:3000/jobs/${userEmail}/latest-earliest`, {
      method: 'GET'
    });
    // console.log('fetched response from jobs get request');
    return response.json();
};



const updateJob = async ({id, fields}) => {
    const response = await fetch(`http://localhost:3000/jobs/${id}`, {
        method: 'PUT', 
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(fields)
    });

    const data = await response.json();
    console.log('fetched response from put request, updated job is: ', data);

    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
}

// const addJob = async({title, company, type, location, date, duration, link, cv, tcv, userEmail}) => {
//     const response = await fetch('http://localhost:3000/jobs/addJob', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({
//             jobTitle: title,
//             company: company,
//             jobType: type,
//             location: location,
//             dateApplied: date,
//             duration: duration,
//             link: link,
//             coverLetterUsed: cv,
//             tailoredCoverLetterUsed: tcv,
//             userEmail: userEmail
//         })
//     });
//     console.log("addJob service response:", response);

//     const new_job = await response.json()
//     console.log("recieved new job: ", new_job);
//     return new_job
// }

const addJob = async({title, company, type, location, date, duration, link, cv, tcv, userEmail}) => {
    console.log('at addJob in service.js with fields: ', {title, company, type, location, date, duration, link, cv, tcv, userEmail});
    const response = await fetch('http://localhost:3000/jobs/addJob', {
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
            coverLetterUsed: cv,
            tailoredCoverLetterUsed: tcv,
            userEmail: userEmail
        })
    });

    const new_jobs = await response.json()
    console.log('new job list is: ', new_jobs);
    return new_jobs
}

const deleteJob = async(data) => {
    console.log("called delete on email: " + data.userEmail)
    const response = await fetch(`http://localhost:3000/jobs/delete/${data.id}`, {
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
    const response = await fetch(`http://localhost:3000/jobs/search/${data.filter}`, {
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
    updateJob,
    addJob,
    deleteJob,
    searchJobs,
    getJobsDateAppliedEarliestToLatest,
    getJobsDateAppliedEarliestToLatest
}