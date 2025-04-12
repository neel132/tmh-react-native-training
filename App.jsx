/* eslint-disable prettier/prettier */
import './gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';

function App() {
  return (
    <NavigationContainer>
      <StackNavigator isUserLoggedIn={true} />
    </NavigationContainer>
  )
}

export default App;
