import Axios, { AxiosError } from 'axios';

const DOMAIN = process.env.REACT_APP_API_URL;

export const instance = Axios.create({
    baseURL: `${DOMAIN}`,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  
  export const setAuthToken = (token: string) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };