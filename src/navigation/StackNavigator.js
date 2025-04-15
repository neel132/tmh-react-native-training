/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login } from '../screens';
import { HOME, LOGIN } from './routes';
import { BottomTabs } from './TabNavigator';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();
function StackNavigator() {
  const {isUserLoggedIn} = useSelector(state => state.auth);
  console.log("user logged in -", isUserLoggedIn);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {
        !isUserLoggedIn ?
          <Stack.Screen name={LOGIN} component={Login} options={{ headerShown: false}} />
        :
          <Stack.Screen name={HOME} component={BottomTabs} />
      }
    </Stack.Navigator>
  );
}

export { StackNavigator };
