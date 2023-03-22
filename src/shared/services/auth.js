import axios from 'axios';

const phonebookInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setToken = token => {
  if (token) {
    return (phonebookInstance.defaults.headers.authorization = `Bearer ${token}`);
  }
  phonebookInstance.defaults.headers.authorization = '';
};

export const signup = async data => {
  const { data: result } = await phonebookInstance.post('/users/signup', data);
  setToken(result.token);
  return result;
};

export const login = async data => {
  const { data: result } = await phonebookInstance.post('/users/login', data);
  setToken(result.token);
  return result;
};

export const getCurrent = async token => {
  try {
    setToken();
    const { data } = await phonebookInstance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logout = async (token) => {
  const { data } = await phonebookInstance.post('users/logout', token);
  setToken();
  return data;
};
export default phonebookInstance;
