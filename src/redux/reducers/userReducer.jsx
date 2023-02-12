import { LOGGEDIN_USER } from "../actionTypes/actionTypes";

// const initialState = [
//     user = [],
// ];

const userReducer =(state= [], {type,payload}) =>{
    switch (type) {
        case LOGGEDIN_USER:
            return {
                ...state,
                user: payload
            }
        default:
            return state
    }
}

export default userReducer;