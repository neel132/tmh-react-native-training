/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile } from '../screens';
import { HOME, PROFILE } from './routes';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ animation: 'shift' }}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export {BottomTabs};
