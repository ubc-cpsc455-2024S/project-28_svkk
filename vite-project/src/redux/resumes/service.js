const getResume = async() => {
    const response = await fetch('http://localhost:3000/resumes', {
        method: 'GET'
    });
    console.log("fetched request to get resumes");
    return response.json();
}

const deleteResume = async (name) => {
    await fetch(`http://localhost:3000/resumes/${name}`, {
        method: 'DELETE',
    })
    console.log(`Deleted resume titled "${name}" `);
};

const addResume = async(resume) => {
    const response = await fetch('http://localhost:3000/resumes', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
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




export default {
    getResume,
    deleteResume,
    addResume
}