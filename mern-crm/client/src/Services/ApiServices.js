
//Login
const loginApi = async (url = '', data = {}) => {
    try{
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }catch(e){
        console.log(`connection failed ${e}`);
    }
}
const sessionApi = async (url, token) => {
    try{
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.json()
    }catch(e){
        console.log(`semething went wrong ${e}`);
    }
}


//fectch employee
const employeeApi = async (url, token ) => {
    try{
        const response = await fetch (url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}` 
            }
        });
        return response;
    }catch(e){
        console.log(`somethign went wrong ${e}`);
    }
}
module.exports = {
    loginApi,
    sessionApi,
    employeeApi
}