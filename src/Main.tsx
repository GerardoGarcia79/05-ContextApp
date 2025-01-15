import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabNavigation} from './presentation/navigators/BottomTabNavigation';

export const Main = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
};
