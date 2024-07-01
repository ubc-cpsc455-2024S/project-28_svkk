const getJobPostings = async() => {
    const response = await fetch('http://localhost:3000/jobPostings', {
        method: 'GET'
    });
    // console.log("retrived job postings");
    return response.json();
}

const addJobPosting = async(jobPosting) => {
    const response = await fetch('http://localhost:3000/jobPostings', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(jobPosting)
    });

    const newJobPosting = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }
    return newJobPosting;
}

const deleteJobPosting = async (name) => {
    await fetch(`http://localhost:3000/jobPostings/${name}`, {
        method: 'DELETE',
    })
    console.log(`Deleted job posting titled "${name}" `);

};



export default {
    getJobPostings,
    addJobPosting,
    deleteJobPosting
}