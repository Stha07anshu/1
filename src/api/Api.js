import axios from "axios"

const api =  axios.create({
    baseURL:"http://localhost:5000",
    withCredentials:true,
    headers :{
        "Content-Type" : "application/json"
    }
});

//creating test api
export const testApi= () => api.get('/test')


export const registerUserApi = (data) => api.post('/api/user/create', data)

// creating login api
export const loginUserApi =(data)=> api.post('api/user/login',data)

//creating admin api
