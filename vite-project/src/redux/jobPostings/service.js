import {USED_IP} from "../ip.js";

const getJobPostings = async({email}) => {
    const response = await fetch(USED_IP + 'jobPostings', {
        method: 'GET',
        headers: {
            'email': email
        }
    });
    return response.json();
}

const addJobPosting = async({email,jobPosting}) => {
    const response = await fetch(USED_IP + 'jobPostings', {
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
    const removed_name = await fetch(USED_IP + `jobPostings/${name}`, {
        method: 'DELETE',
        headers: {
            'email': email
        }
    })
    const name_value = removed_name.json();
    return name_value;
};



export default {
    getJobPostings,
    addJobPosting,
    deleteJobPosting
}