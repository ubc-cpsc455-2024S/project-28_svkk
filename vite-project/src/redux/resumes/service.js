import {USED_IP} from "../ip.js";

const getResume = async({email}) => {
    const response = await fetch(USED_IP + 'resumes', {
        method: 'GET',
        headers: {
            'email': email
        }
    });

    return response.json();
}

const addResume = async({email, resume}) => {
    const response = await fetch(USED_IP + 'resumes', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'email': email
        },
        body: JSON.stringify(resume)
    });


    const newResume = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return newResume;
}

const deleteResume = async ({email, name}) => {
    const remove_name = await fetch(USED_IP + `resumes/${name}`, {
        method: 'DELETE',
        headers: {
            'email': email
        }
    })

    const name1 = await remove_name.json();
    return name1;

};



export default {
    getResume,
    deleteResume,
    addResume
}