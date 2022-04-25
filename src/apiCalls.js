import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await axios.post(`http://localhost:5000/auth/login`, userCredentials);
        const data = await res.data;
        console.log(data)
        // localStorage.setItem('user_id', res.data._id);
        // localStorage.setItem('user_firstName', res.data.firstName);
        // localStorage.setItem('user_lastName', res.data.lastName);
        // localStorage.setItem('user_username', res.data.username);
        // localStorage.setItem('user_profilePicture', res.data.profilePicture);

        localStorage.setItem('login', true);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

    } catch (error) {
        dispatch({ type: "LOGIN_FALIURE", payload: error.response.data });
    }
}

export const logoutCall = async (dispatch) => {
    // localStorage.removeItem('user_id');
    // localStorage.removeItem('user_profilePicture');

    // localStorage.setItem('login', false)
    // localStorage.removeItem('user_passwd');
    // localStorage.removeItem('user_email');
    dispatch({ type: "LOGOUT" })
}