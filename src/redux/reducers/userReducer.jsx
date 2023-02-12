import { LOGGEDIN_USER, SET_USER_INFO } from "../actionTypes/actionTypes";

const initialState = [
    // userInfo = [],
    // user=[]
    []
];

const userReducer =(state= initialState, {type,payload}) =>{
    switch (type) {
        case LOGGEDIN_USER:
            return {
                ...state,
                user: payload
            }

        case SET_USER_INFO:
            return {
                ...state,
                userInfo: payload
            }

        default:
            return state
    }
}

export default userReducer;