import axios from "axios";
const setAuthToken = token =>{
    if(token){
        //Apply Authoriation token to every request if logged in
        axios.defaults.headers.common["Authorization"] = token; 
    }else{
        //Default auth header
        delete axios.defaults.headers.common["Authorization"];
    }
}