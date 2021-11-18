import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthStack from './AuthStack';

function Routes() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

export default Routes;
