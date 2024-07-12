const getJobPostings = async({email}) => {
    const response = await fetch('http://localhost:3000/jobPostings', {
        method: 'GET',
        headers: {
            'email': email
        }
    });
    // console.log("retrived job postings");
    return response.json();
}

const addJobPosting = async({email,jobPosting}) => {
    console.log("jobPosting service");
    console.log(jobPosting);
    const response = await fetch('http://localhost:3000/jobPostings', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'email':email
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

const deleteJobPosting = async ({email,name}) => {
    const removed_name = await fetch(`http://localhost:3000/jobPostings/${name}`, {
        method: 'DELETE',
        headers: {
            'email': email
        }
    })
    console.log(`Deleted job posting titled "${name}" `);
    const name_value = removed_name.json();
    return name_value;
};



export default {
    getJobPostings,
    addJobPosting,
    deleteJobPosting
}