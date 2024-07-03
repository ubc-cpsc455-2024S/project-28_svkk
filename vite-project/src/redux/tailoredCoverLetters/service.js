const getTailoredCoverLetters = async() => {
    const response = await fetch('http://localhost:3000/tailoredCoverLetters', {
        method: 'GET'
    });
    console.log("fetched request to get tailored cover letters");
    return response.json();
}

const deleteTailoredCoverLetter = async (name) => {
    await fetch(`http://localhost:3000/tailoredCoverLetters/${name}`, {
        method: 'DELETE',
    })
    console.log(`Deleted tailored cover letter titled "${name}" `);
};

const addTailoredCoverLetter = async(coverLetter) => {
    const response = await fetch('http://localhost:3000/tailoredCoverLetters', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
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




export default {
    getTailoredCoverLetters,
    deleteTailoredCoverLetter,
    addTailoredCoverLetter
}