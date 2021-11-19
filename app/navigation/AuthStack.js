import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import ForgotPassword from '../screens/ForgotPassword';

const Stack = createNativeStackNavigator();

function AuthStack() {
  let routeName = 'Login';
  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen name="Login" component={Login} options={{ header: () => null }} />
      <Stack.Screen name="Signup" component={Signup} options={{ header: () => null }} />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={({ navigation }) => ({
          title: '',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerBackTitleVisible: false,
          headerTintColor: '#0049bf',
        })}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
