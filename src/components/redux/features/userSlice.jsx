import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import * as api from '../api'


export const login =createAsyncThunk("/login",async({formData,history,toast})=>{
    try {
        const response =await api.login(formData);
        if(response.data._id){
           toast.success("Welcome! Raghav");
           history.push("/");
           return response.data;   
   
        }
        else{
           toast.error("Invalid Credentials")
        }
    } catch (error) {
         console.log(error)
        toast.error(error.message);
    }
})
export const register =createAsyncThunk("/register",async({formData,history,toast})=>{
    try {
        const response =await api.register(formData);
        if(response?.data.message){ 
           history.push("/");
           return toast.success("Registered successfully"); ;   
        }
        else{
           toast.error("Invalid Credentials")
        }
    } catch (error) {
        console.log(error)
        toast.error(error.message);
    }
})
export const getLead=createAsyncThunk("/getlead",async({formData,toast},{rejectWithValue})=>{
  try {
       const response=await api.getLead(formData);
       if(response?.data.message){
        toast.error("You're Not An Employe");
        return rejectWithValue(response?.data.message) 
       }
       else{
        return response.data;
       }
  } catch (error) {
    console.log(error)
  }

})
export const addFeed=createAsyncThunk("/addfeed",async({formData,toast},{rejectWithValue})=>{
    try { 
        const response=await api.addFeed(formData);
        if(response?.data.message==="Lead not found"){
            toast.error("Lead Not Found")
             return rejectWithValue(response?.data.message);
        }
        else{
            toast.success(response?.data.message)
           return response.data;
        }
        
    } catch (error) {
        console.log(error);
        toast.error(error.message)
    }
})
export const getPlead=createAsyncThunk("/getplead",async({formValue,toast},{rejectWithValue})=>{
    try { 
        const response=await api.getPLead(formValue);
        if(response?.data.message){
            toast.error("Lead Not Found")
             return rejectWithValue(response?.data.message);
        }
        else{
           return response.data;
        }
        
    } catch (error) {
        console.log(error);
        toast.error(error.message)
    }
})
export const recall=createAsyncThunk('recall',async({formData,toast})=>{
    try {
        const res = await api.recall(formData);
        if(res?.data.message!=="Lead not found"){
        toast.success(res?.data.message)
        return res.data;
        }
        else{
            toast.error("Lead Not Found")
        }
    } catch (error) {
        console.log(error)
    }
})
export const addName=createAsyncThunk('addName',async({formData,toast})=>{
    try {
        const res = await api.addName(formData);
        toast.success(res?.data.message)
        return res.data;
    } catch (error) {
        console.log(error)
    }
})
export const addTag=createAsyncThunk('addtag',async({formData,toast})=>{
    try {
        const res = await api.addTag(formData);
        toast.success("Tag added successfully")
        return res.data;
    } catch (error) {
        console.log(error)
    }
})
export const addToList=createAsyncThunk('addtolist',async({formData,toast})=>{
    try {
        const res = await api.addToList(formData);
        if(res?.data?.user!==null)
        toast.success(res.data.message)
        else
        toast.error(res.data.message)
        return res.data;
    } catch (error) {
        console.log(error)
    }
})
export const removeFromList=createAsyncThunk('addtolist',async({formData,toast})=>{
    try {
        const res = await api.removeFromList(formData);
        if(res?.data?.user!==null)
        toast.success(res.data.message)
        else
        toast.error(res.data.message)
        return res.data;
    } catch (error) {
        console.log(error)
    }
})
export const getEmployee=createAsyncThunk('getemployee',async({formData,toast})=>{
    try {
        const res = await api.getEmployee(formData);
        if(res?.data?.message!==null)
        toast.error(res.data.message)
        return res.data;
    } catch (error) {
        console.log(error)
    }
})
export const getNextLead=createAsyncThunk('getnextlead',async({formData,toast})=>{
    try {
        const res = await api.getNextLeads(formData);
        if(res?.data?.message!==null)
        toast.error(res.data.message)
        return res.data;
    } catch (error) {
        console.log(error)
    }
})
export const getPrevLead=createAsyncThunk('getprevlead',async({formData,toast})=>{
    try {
        const res = await api.getPrevLeads(formData);
        if(res?.data?.message!==null)
        toast.error(res.data.message)
        return res.data;
    } catch (error) {
        console.log(error)
    }
})
export const partEmployee=createAsyncThunk('getpartemployee',async({formData,toast})=>{
    try {
        const res = await api.getPartEmployee(formData);
        if(res?.data?.message!==null)
        toast.error(res.data.message)
        return res.data;
    } catch (error) {
        console.log(error)
    }
})
export const SearchLead=createAsyncThunk('searchlead',async({formData,toast})=>{
    try {
        const res = await api.getPLead(formData);
        if(res?.data?.message!==null)
        toast.error(res.data.message)
        return res.data;
    } catch (error) {
        console.log(error)
    }
})
export const delLead=createAsyncThunk('dellead',async({formData,toast})=>{
    try {
        const res = await api.delLead(formData);
        if(res?.data?.message!==null)
        toast.success(res.data.message)
        return res.data;
    } catch (error) {
        console.log(error)
    }
})
export const delLead2=createAsyncThunk('dellead2',async({formData,toast})=>{
    try {
        const res = await api.delLead2(formData);
        if(res?.data?.message!==null)
        toast.success(res.data.message)
        return res.data;
    } catch (error) {
        console.log(error)
    }
})
export const targett=createAsyncThunk('target',async({formData,toast})=>{
    try {
        const res = await api.target(formData);
        if(res?.data)
        toast.success("Target Updated Succefully!")
        else
        toast.error(res.data.message)
        return res.data;
    } catch (error) {
        console.log(error)
    }
})
export const addDone=createAsyncThunk('addone',async({formData,toast})=>{
    try {
        const res = await api.addDone(formData);
        if(res?.data)
        toast.success("Added Succefully!")
        else
        toast.error(res.data.message)
        return res.data;
    } catch (error) {
        console.log(error)
    }
})
export const adminLogin =createAsyncThunk("/adminlogin",async({formData,history,toast})=>{
    try {
        const response =await api.adminLogin(formData);
        if(response.data.token){
           toast.success("Welcome Maalik!");
           history.push("/admin");
         
           return response.data;   
   
        }
        else{
           toast.error("Invalid Credentials")
        }
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
})
const userSlice=createSlice({
   name:"user",
   initialState:{
    pemployee:null,
    admin:false,
    allLead:null,
    user:null,
    employee:null,
    error:"",
    status:false,
    lead:null,
    plead:null,
    loading:false
   },
   extraReducers:{
    [login.pending]:(state, action)=>{
        state.loading=true;
    },
    [login.fulfilled]:(state, action)=>{
        state.loading=false;
        state.status=true;
        console.log(action.payload);
        localStorage.setItem("user",JSON.stringify(action.payload));
        state.user = action.payload;
    },
    [login.rejected]:(state, action)=>{
        state.loading=false;
        state.status=false;
        state.error=action.payload.message;
    },
    [getLead.pending]:(state, action)=>{
        state.loading=true;
    },
    [getLead.fulfilled]:(state, action)=>{
        state.loading=false;
        console.log(action.payload);
        sessionStorage.setItem("leads",JSON.stringify(action.payload));
        state.lead = action.payload;
    },
    [getLead.rejected]:(state, action)=>{
        state.loading=false;
        state.error=action.payload.message;
    },
    [getPlead.pending]:(state, action)=>{
        state.loading=true;
    },
    [getPlead.fulfilled]:(state, action)=>{
        state.loading=false;
        console.log(action.payload);
        sessionStorage.setItem("plead",JSON.stringify(action.payload))
        state.plead = action.payload;
    },
    [SearchLead.pending]:(state, action)=>{
        state.loading=true;
    },
    [SearchLead.fulfilled]:(state, action)=>{
        state.loading=false;
        console.log(action.payload);
        state.plead = action.payload;
    },
    [addTag.rejected]:(state, action)=>{
        state.loading=false;
        state.error=action.payload.message;
    },

    [addTag.pending]:(state, action)=>{
        state.loading=true;
    },
    [addTag.fulfilled]:(state, action)=>{
        state.loading=false;
        console.log(action.payload);
        sessionStorage.setItem("plead",JSON.stringify(action.payload.plead))
        localStorage.setItem("user",JSON.stringify(action.payload.user))
        state.user=action.payload.user;
        state.plead = action.payload.plead;
    },
    [addTag.rejected]:(state, action)=>{
        state.loading=false;
        state.error=action.payload.message;
    },
    [addToList.pending]:(state, action)=>{
        state.loading=true;
    },
    [addToList.fulfilled]:(state, action)=>{
        state.loading=false;
        console.log(action.payload.user);
        localStorage.setItem("user",JSON.stringify(action.payload.user));
        state.user = action.payload.user;
    },
    [addToList.rejected]:(state, action)=>{
        state.loading=false;
        state.status=false;
        state.error=action.payload.message;
    },
    [removeFromList.pending]:(state, action)=>{
        state.loading=true;
    },
    [removeFromList.fulfilled]:(state, action)=>{
        state.loading=false;
        console.log(action.payload);
        localStorage.setItem("user",JSON.stringify(action.payload.user));
        state.user = action.payload.user;
    },
    [removeFromList.rejected]:(state, action)=>{
        state.loading=false;
        state.status=false;
        state.error=action.payload.message;
    },
    [getEmployee.pending]:(state, action)=>{
        state.loading=true;
    },
    [getEmployee.fulfilled]:(state, action)=>{
        state.loading=false;
        console.log(action.payload);
        sessionStorage.setItem("employee",JSON.stringify(action.payload));
        state.employee = action.payload;
    },
    [getEmployee.rejected]:(state, action)=>{
        state.loading=false;
        state.status=false;
        state.error=action.payload.message;
    },
    [getNextLead.pending]:(state, action)=>{
        state.loading=true;
    },
    [getNextLead.fulfilled]:(state, action)=>{
        state.loading=false;
        console.log(action.payload);
        sessionStorage.setItem("allleads",JSON.stringify(action.payload));
        state.allLead = action.payload;
    },
    [getNextLead.rejected]:(state, action)=>{
        state.loading=false;
        state.status=false;
        state.error=action.payload.message;
    },
    
    [getPrevLead.pending]:(state, action)=>{
        state.loading=true;
    },
    [getPrevLead.fulfilled]:(state, action)=>{
        state.loading=false;
        console.log(action.payload);
        sessionStorage.setItem("allleads",JSON.stringify(action.payload));
        state.allLead = action.payload;
    },
    [getPrevLead.rejected]:(state, action)=>{
        state.loading=false;
        state.status=false;
        state.error=action.payload.message;
    }, [partEmployee.pending]:(state, action)=>{
        state.loading=true;
    },
    [partEmployee.fulfilled]:(state, action)=>{
        state.loading=false;
        console.log(action.payload);
        sessionStorage.setItem("pemployee",JSON.stringify(action.payload));
        state.pemployee = action.payload;
    },
    [partEmployee.rejected]:(state, action)=>{
        state.loading=false;
        state.error=action.payload.message;
    },
    [addDone.pending]:(state, action)=>{
        state.loading=true;
    },
    [addDone.fulfilled]:(state, action)=>{
        state.loading=false;
        console.log(action.payload);
        sessionStorage.setItem("pemployee",JSON.stringify(action.payload));
        state.pemployee = action.payload;
    },
    [addDone.rejected]:(state, action)=>{
        state.loading=false;
        state.error=action.payload.message;
    }, [targett.pending]:(state, action)=>{
        state.loading=true;
    },
    [targett.fulfilled]:(state, action)=>{
        state.loading=false;
        console.log(action.payload);
        sessionStorage.setItem("pemployee",JSON.stringify(action.payload));
        state.pemployee = action.payload;
    },
    [targett.rejected]:(state, action)=>{
        state.loading=false;
        state.error=action.payload.message;
    },
    [adminLogin.pending]:(state, action)=>{
        state.loading=true;
    },
    [adminLogin.fulfilled]:(state, action)=>{
        state.loading=false;
        console.log(action.payload);
        sessionStorage.setItem("token",JSON.stringify(action.payload.token));
        state.admin = true;
    },
    [adminLogin.rejected]:(state, action)=>{
        state.loading=false;
        state.error=action.payload.message;
    }
   }

})
export default userSlice.reducer;