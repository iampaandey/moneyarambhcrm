import axios from 'axios'
const Api = axios.create({baseURL:"http://localhost:7000"})
export const addLead=(obj)=>{
    return Api.post('/addlead',obj)
}
export const login=(formData)=>{
    return Api.post('/login',formData)
}
export const register=(formData)=>{
    return Api.post('/register',formData)
}