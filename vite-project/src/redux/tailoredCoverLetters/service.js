import {USED_IP} from "../ip.js";


const getTailoredCoverLetters = async({email}) => {
    const response = await fetch(USED_IP + 'tailoredCoverLetters', {
        method: 'GET',
        headers: {
            'email': email
        }
    });
    console.log("fetched request to get tailored cover letters");
    return response.json();
}

const addTailoredCoverLetter = async({email, coverLetter}) => {
    console.log("Tailored Cover Letter");
    console.log(coverLetter);
    const response = await fetch(USED_IP + 'tailoredCoverLetters', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'email' : email
        },
        body: JSON.stringify(coverLetter)
    });


    const newCoverLetter = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return newCoverLetter;
}

const deleteTailoredCoverLetter = async ({email, name}) => {
    const removed_name = await fetch(USED_IP + `tailoredCoverLetters/${name}`, {
        method: 'DELETE',
        headers: {
            'email' : email
        }
    })
    const name1 = await removed_name.json();
    return name1;
};

export default {
    getTailoredCoverLetters,
    deleteTailoredCoverLetter,
    addTailoredCoverLetter
}