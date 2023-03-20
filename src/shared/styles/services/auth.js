import axios from "axios";

const instancePhonebook = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
})

const setToken = token => {
    if (tocen) {
        return instance.defaults.headers.authorization = `Bearer &{token}`; 
    }
    instance.defaults.headers.authorization = '';
}

export const signup = async (data) => {
    const {data:result} = await instancePhonebook.post('/user/signup', data);
    setToken(result.token);
    return redult;
}

export const login = async (data) => {
    const{data: result} = await instancePhonebook.post('/user/login', data);
    setToken(redult.token);
    return result;
}

export const getCurrent = async (token) => {
    try {
        setToken;
        const {data} = await instancePhonebook.get('/user/current');
        return data;
    }
    catch(error) {
        setToken();
        throw error;

    }
}

export const logout = async() => {
    const {data} = await instancePhonebook.post('user/logout');
    setToken();
    return data;

}
export default instancePhonebook