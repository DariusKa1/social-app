import axios from "axios";

const USERS_REGISTER_ENDPOINT = "http://localhost:5000/api/v1/users/register"
const USERS_LOGIN_ENDPOINT = "http://localhost:5000/api/v1/users/login"


const registerUser = async (payload) => {
    const response = await axios.post(USERS_REGISTER_ENDPOINT, payload);
    if(response) localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
}

const loginUser = async (payload) => {
    const response = await axios.post(USERS_LOGIN_ENDPOINT, payload);
    if(response) localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
}



const userService = {
    registerUser,
    loginUser,
};

export default userService;