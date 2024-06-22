
// ===== Users =====
const loginUser = async(credentials) => {
    const response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: (JSON.stringify(credentials))
    });
    // console.log(credentials);
    //console.log('fetched response from get request');

    return response.json();
}

const logoutUser = async({uuid, token}) => {
    const response = await fetch('http://localhost:3000/user/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringfy({
            uuid: uuid,
            token: token
        })
    });
    //console.log('fetched response from get request');
    return response.json();
}

const getUser = async({uuid, token}) => {
    const response = await fetch('http://localhost:3000/user/info', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uuid: uuid,
            token: token
        })
    });
    //console.log('fetched response from get request');
    return response.json();
}

const addUser = async({username, password, email, name}) => {
    const response = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
            email: email,
            name: name
        })
    });
    //console.log('fetched response from get request');
    return response.json();
}

const deleteUser = async({uuid, token, username, password}) => {
    const response = await fetch('http://localhost:3000/user', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uuid: uuid,
            token: token,
            username: username,
            password: password
        })
    });
    //console.log('fetched response from get request');
    return response.json();
}

const patchUser = async({uuid, token, user}) => {
    const response = await fetch('http://localhost:3000/user', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uuid: uuid,
            token: token,
            user: user
        })
    });
    //console.log('fetched response from get request');
    return response.json();
}


// ===== Resumes =====

const addResume = async({uuid, token, name, resumeString}) => {
    console.log("Add Resume");
    console.log(uuid);
    console.log(token);
    console.log(name);
    console.log(resumeString);
    const response = await fetch('http://localhost:3000/user/resume', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uuid: uuid,
            token: token,
            resume: {
                uuid: -1,
                name: name,
                content: resumeString
            }
        })
    });
    //console.log('fetched response from get request');
    return response.json();
}

const patchResume = async({uuid, token, resumeUUID, resumeString}) => {
    const response = await fetch('http://localhost:3000/user/resume', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uuid: uuid,
            token: token,
            resume: {
                uuid: resumeUUID,
                content: resumeString
            }
        })
    });
    //console.log('fetched response from get request');
    return response.json();
}

const deleteResume = async({uuid, token, resumeUUID}) => {
    console.log("HERE 2");
    console.log(resumeUUID);
    const response = await fetch('http://localhost:3000/user/resume', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uuid: uuid,
            token: token,
            resume: {
                uuid: resumeUUID,
            }
        })
    });
    //console.log('fetched response from get request');
    return response.json();
}

// ===== Cover Letters =====

const addCoverLetter = async({uuid, token, name, coverLetterString}) => {
    const response = await fetch('http://localhost:3000/user/coverLetter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uuid: uuid,
            token: token,
            coverLetter: {
                uuid: -1,
                name: name,
                content: coverLetterString
            }
        })
    });
    //console.log('fetched response from get request');
    return response.json();
}

const patchCoverLetter = async({uuid, token, coverLetterUUID, coverLetterString}) => {
    const response = await fetch('http://localhost:3000/user/coverLetter', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uuid: uuid,
            token: token,
            coverLetter: {
                uuid: coverLetterUUID,
                content: coverLetterString
            }
        })
    });
    //console.log('fetched response from get request');
    return response.json();
}

const deleteCoverLetter = async({uuid, token, coverLetterUUID}) => {
    console.log("coverLetterUUID");
    console.log(coverLetterUUID);
    const response = await fetch('http://localhost:3000/user/coverLetter', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({
            uuid: uuid,
            token: token,
            coverLetter: {
                uuid: coverLetterUUID,
            }
        })
    });
    //console.log('fetched response from get request');
    return response.json();
}

// ===== Job Postings =====

const addJobPosting = async({uuid, token, name, jobPostingString}) => {
    const response = await fetch('http://localhost:3000/user/jobPosting', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uuid: uuid,
            token: token,
            jobPosting: {
                uuid: -1,
                name: name,
                content: jobPostingString
            }
        })
    });
    //console.log('fetched response from get request');
    return response.json();
}

const patchJobPosting = async({uuid, token, jobPostingUUID, jobPostingString}) => {
    const response = await fetch('http://localhost:3000/user/jobPosting', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uuid: uuid,
            token: token,
            jobPosting: {
                uuid: jobPostingUUID,
                content: jobPostingString
            }
        })
    });
    //console.log('fetched response from get request');
    return response.json();
}

const deleteJobPosting = async({uuid, token, jobPostingUUID}) => {
    console.log("deleteJobPosting" + jobPostingUUID);
    const response = await fetch('http://localhost:3000/user/jobPosting', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uuid: uuid,
            token: token,
            jobPosting: {
                uuid: jobPostingUUID,
            }
        })
    });
    //console.log('fetched response from get request');
    return response.json();
}

// ===== Tailored Cover Letters =====
const addTailoredCoverLetter = async ({uuid, token, name, coverLetterString}) => {
    const response = await fetch('http://localhost:3000/user/tailoredCoverLetter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uuid: uuid,
            token: token,
            tailoredCoverLetter: {
                uuid: -1,
                name: name,
                content: coverLetterString
            }
        })
    });
    return response.json();
}

const patchTailoredCoverLetter = async ({uuid, token, coverLetterUUID, coverLetterString}) => {
    const response = await fetch('http://localhost:3000/user/tailoredCoverLetter', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uuid: uuid,
            token: token,
            tailoredCoverLetter: {
                uuid: coverLetterUUID,
                content: coverLetterString
            }
        })
    });
    return response.json();
}


const deleteTailoredCoverLetter = async ({uuid, token, coverLetterUUID}) => {
    const response = await fetch('http://localhost:3000/user/tailoredCoverLetter', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uuid: uuid,
            token: token,
            tailoredCoverLetter: {
                uuid: coverLetterUUID,
            }
        })
    });
    return response.json();
}

// ===== Tailor Request =====

const sendTailorRequest = async ({uuid, token, coverLetterString}) => {
    const response = await fetch('http://localhost:3000/user/tailor', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uuid: uuid,
            token: token,
            tailoredCoverLetter: {
                uuid: -1,
                content: coverLetterString
            }
        })
    });
    return response.json();
}



export default {
    loginUser,
    logoutUser,
    getUser,
    addUser,
    deleteUser,
    patchUser,
    addResume,
    patchResume,
    deleteResume,
    addCoverLetter,
    patchCoverLetter,
    deleteCoverLetter,
    addJobPosting,
    patchJobPosting,
    deleteJobPosting,
    addTailoredCoverLetter,
    patchTailoredCoverLetter,
    deleteTailoredCoverLetter,
    sendTailorRequest
};
