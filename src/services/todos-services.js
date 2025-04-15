/* eslint-disable prettier/prettier */
import {axiosInstance} from '../config';

const getTodos = async () => {
  try {
    const response = await axiosInstance.get('todos/1');
    console.log('Response data -', response.data);
    return response.data;
  } catch (e) {
    console.log('Error in todos api -', e);
  }
};

const saveTodos = async (data) => {
  try {
    const response = await axiosInstance.post('todos', {...data});
    console.log('Response data -', response.data);
    return response.data;
  } catch (e) {
    console.log('Error in todos api -', e);
  }
};

export {getTodos, saveTodos};
