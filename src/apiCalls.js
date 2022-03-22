import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
    dispatch({type: "LOGIN_START"});
    try {
        const bserv=process.env.BACKEND_SERVER
        console.log(bserv)
        const res = await axios.post('http://127.0.0.1:5000/auth/login', userCredentials);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data});
    } catch (error) {
        dispatch({type: "LOGIN_FALIURE", payload: error.response.data});
    }
}