import { Children } from "react";
import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

let initial_user = {
    _id : localStorage.getItem('user_id'),
    profilePicture : localStorage.getItem('user_profilePicture'),
}

if(initial_user._id == null)
    initial_user = null

const INITIAL_STATE = {
    user: initial_user,
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{
            user:state.user, 
            isFetching:state.isFetching, 
            error: state.error,
            dispatch
            }} >
            {children}
        </AuthContext.Provider>
    )
}