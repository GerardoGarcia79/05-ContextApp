import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SettingsScreen} from '../settings/SettingsScreen';
import {HomeScreen} from '../screens/home/HomeScreen';
import {ProfileScreen} from '../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
