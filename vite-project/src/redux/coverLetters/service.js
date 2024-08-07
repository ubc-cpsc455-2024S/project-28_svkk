import {USED_IP} from "../ip.js";

const getCoverLetterTemplates = async() => {
    const response = await fetch(USED_IP + 'coverLetters/templates', {
        method: 'GET'
    });
    return response.json();
}

const getCoverLetters = async({email}) => {
    const response = await fetch(USED_IP + 'coverLetters', {
        method: 'GET',
        headers: {
            'email' : email
        }
    });
    return response.json();
}

const addCoverLetter = async({email, coverLetter}) => {
    const response = await fetch(USED_IP + 'coverLetters', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'email': email
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

const deleteCoverLetter = async ({email,name}) => {
    const removed_name = await fetch(USED_IP + `coverLetters/${name}`, {
        method: 'DELETE',
        headers: {
            'email': email
        }
    })
    const name1 = await removed_name.json();
    return name1;

};




export default {
    getCoverLetterTemplates,
    getCoverLetters,
    addCoverLetter,
    deleteCoverLetter
}