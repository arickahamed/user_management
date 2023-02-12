import { LOGGEDIN_USER, SET_USER_INFO } from "../actionTypes/actionTypes";

export const loggedinUser =(user)=> {
    return{
        type: LOGGEDIN_USER,
        payload: user
    }
};

export const setUserInfo = (data) =>{
    return{ 
        type: SET_USER_INFO,
        payload: data
    }
};