import { LOGGEDIN_USER } from "../actionTypes/actionTypes";

export const loggedinUser =(user)=> {
    return{
        type: LOGGEDIN_USER,
        payload: user
    }
};