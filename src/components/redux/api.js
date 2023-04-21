import axios from 'axios'
const Api = axios.create({baseURL:"http://localhost:7000"})
export const addLead=(obj)=>{
    return Api.post('/addlead',obj)
}