import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import * as api from '../api'


export const login =createAsyncThunk("/login",async({formData,history,toast})=>{
    try {
        const response =await api.login(formData);
        if(response.data._id){
           toast.success("Welcome! Raghav");
           history.push("/");
           console.log(response.data)
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
export const register =createAsyncThunk("/login",async({formData,history,toast})=>{
    try {
        const response =await api.register(formData);
        if(response?.data.message){
           toast.success("Registered successfully");
           history.push("/");
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
    user:null,
    error:"",
    status:false,
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
        state.user = action.payload.data;
    },
    [login.rejected]:(state, action)=>{
        state.loading=false;
        state.status=false;
        state.error=action.payload.message;
    }
   }

})
export default userSlice.reducer;