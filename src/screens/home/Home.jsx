/* eslint-disable prettier/prettier */
import { ActivityIndicator, View } from 'react-native';
import { CustomLabel } from '../../components';
import { useEffect, useState } from 'react';
import { getTodos } from '../../services';

const Home = () => {
  const [title, setTitle] = useState('');
  useEffect(() => {
    getTodoDataFromServices();
  }, []);
  const getTodoDataFromServices = async () => {
    try {
      const data = await getTodos();
      if (data.title) {
        setTitle(data.title);
      }
      console.log("Data from response -", data);
    } catch (e) {
      console.log("Error from response -", e);
    }
  }
  if(title === '') {
    return <ActivityIndicator size="large" />
  }
  return (
     <CustomLabel label={title} />
  );
}
export {Home};
