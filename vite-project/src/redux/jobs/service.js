const getJobs = async () => {
    const response = await fetch('http://localhost:3000/users', {
      method: 'GET'
    });
    //console.log('fetched response from get request');
    return response.json();
};

export default {
    getJobs
}