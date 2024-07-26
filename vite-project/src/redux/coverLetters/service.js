import {USED_IP} from "../ip.js";

const getCoverLetterTemplates = async() => {
    const response = await fetch(USED_IP + 'coverLetters/templates', {
        method: 'GET'
    });
    console.log("fetched request to get cover letter templates");
    return response.json();
}

const getCoverLetters = async({email}) => {
    console.log("HI");
    const response = await fetch(USED_IP + 'coverLetters', {
        method: 'GET',
        headers: {
            'email' : email
        }
    });
    console.log("fetched request to get cover letters");
    return response.json();
}

const addCoverLetter = async({email, coverLetter}) => {

    console.log("HERE")
    console.log(email);
    console.log(coverLetter);

    const response = await fetch(USED_IP + 'coverLetters', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'email': email
        },
        body: JSON.stringify(coverLetter)
    });
    // console.log("addCoverLetter successful");

    const newCoverLetter = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }
    return newCoverLetter;
}

const deleteCoverLetter = async ({email,name}) => {
    console.log("DETE");
    const removed_name = await fetch(USED_IP + `coverLetters/${name}`, {
        method: 'DELETE',
        headers: {
            'email': email
        }
    })
    const name1 = await removed_name.json();
    console.log("DETES")
    console.log(name1);
    // console.log("NORMAL")
    // console.log((removed_name));
    //
    // console.log("JSON PARSE")
    // console.log(JSON.parse(removed_name));
    console.log(`Deleted cover letter titled "${name}" `);
    return name1;

};




export default {
    getCoverLetterTemplates,
    getCoverLetters,
    addCoverLetter,
    deleteCoverLetter
}