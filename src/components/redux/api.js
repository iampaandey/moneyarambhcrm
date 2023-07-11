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
export const getLead=(formData)=>{
    return Api.post('/getlead',formData)
}
export const addFeed=(formData)=>{
    return Api.post('/addfeed',formData)
}
export const getPLead=(formValue)=>{
    return Api.post('/getplead',formValue)
}
export const recall=(formValue)=>{
    return Api.post('/recall',formValue)
}
export const addName=(formData)=>{
    return Api.post('/addname',formData)
}
export const addTag=(formData)=>{
    return Api.post('/addtag',formData)
}
export const addToList=(formData)=>{
    return Api.post('/addtolist',formData)
}
export const removeFromList=(formData)=>{
    return Api.post('/removefromlist',formData)
}
export const getEmployee=(formData)=>{
    return Api.post('/getemployee',formData)
}
export const getNextLeads=(formData)=>{
    return Api.post('/getnextleads',formData)
}
export const getPrevLeads=(formData)=>{
    return Api.post('/getprevleads',formData)
}
export const getPartEmployee=(formData)=>{
    return Api.post('/partemployee',formData)
}
export const delLead=(formData)=>{
    return Api.post('/dellead',formData)
}
export const delLead2=(formData)=>{
    return Api.post('/dellead2',formData)
}
export const target=(formData)=>{
    return Api.post('/settarget',formData)
}
export const addDone=(formData)=>{
    return Api.post('/adddone',formData)
}
export const adminLogin=(formData)=>{
    return Api.post('/adminlogin',formData);
}
export const addPlead=(formData)=>{
    return Api.post('/addplead',formData);
}
export const resettoken=(formData)=>{
    return Api.post('/resettoken',formData);
}