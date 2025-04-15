/* eslint-disable prettier/prettier */
import axios from 'axios';

// multiple instances can be created.
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  timeout: 15000,
});

// Interceptors.
axiosInstance.interceptors.request.use((config) => {
  let token = fromStore(); // get the token from your store.
  if(token !== '') {
    config['headers'].Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use((response) => {
  return response;
});

export {axiosInstance};
