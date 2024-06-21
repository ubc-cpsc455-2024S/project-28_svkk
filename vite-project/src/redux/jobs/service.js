const getJobs = async () => {
    const response = await fetch('http://localhost:3000/jobs', {
      method: 'GET'
    });
    //console.log('fetched response from get request');
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

    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
}

const addJob = async({title, company, type, location, date, duration, link, cv}) => {
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
        })
    });

    const new_jobs = await response.json()
    return new_jobs
}



export default {
    getJobs,
    updateJob,
    addJob
}