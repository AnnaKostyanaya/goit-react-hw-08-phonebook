import axios from "axios";

const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com"
})

const setToken = token => {
 if (token) {
    return instance.defaults.headers.authorization = `Bearer ${token}`;
 }
 instance.defaults.headers.authorization = "";
}


export const signup = async (data) => {
    try {
        const { data: result } = await instance.post("/users/signup", data);
        setToken(result.token);
        return result;
    } catch(error) {
        console.clear();
        throw error;
    }
}

export const login = async (data) => {
    try {
        const { data: result } = await instance.post("/users/login", data);
        setToken(result.token);
        return result;
    } catch(error) {
        console.clear();
        throw error;
    }
}

export const getCurrent = async(token) => {
try {
    setToken(token);
    const {data} = await instance.get("/users/current");
    return data;
}
catch(error) {
    setToken();
    console.clear();
    throw error;
}
}

export const logout = async () => {
    try {
        const {data} = await instance.post("/users/logout");
        setToken();
        return data;
    } catch(error) {
        console.clear();
        throw error;
    }
}

export default instance;