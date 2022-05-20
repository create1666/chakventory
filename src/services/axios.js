import axios from 'axios';

export const initAxios = async () => {
  axios.defaults.baseURL = 'http://localhost:4300';
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      //   console.log(error.response.data);
      if (error.response.status === '401') {
        window.location.href = 'login';
      }
      return error.response.data;
    }
  );
};

export const addAuthorizationHeader = (token) => {
  axios.defaults.headers.common['Authorization'] = `bearer ${token}`;
};

export const removeAuthorizationHeader = () => {
  axios.defaults.headers.common['Authorization'] = undefined;
};
