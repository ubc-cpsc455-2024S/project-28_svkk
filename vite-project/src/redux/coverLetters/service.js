const getCoverLetterTemplates = async() => {
    const response = await fetch('http://localhost:3000/coverLetters/templates', {
        method: 'GET'
    });
    console.log("fetched request to get cover letter templates");
    return response.json();
}

const getCoverLetters = async() => {
    const response = await fetch('http://localhost:3000/coverLetters', {
        method: 'GET'
    });
    console.log("fetched request to get cover letters");
    return response.json();
}

const addCoverLetter = async(coverLetter) => {
    const response = await fetch('http://localhost:3000/coverLetters', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
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

const deleteCoverLetter = async (name) => {
    await fetch(`http://localhost:3000/coverLetters/${name}`, {
        method: 'DELETE',
    })
    console.log(`Deleted cover letter titled "${name}" `);
};




export default {
    getCoverLetterTemplates,
    getCoverLetters,
    addCoverLetter,
    deleteCoverLetter
}