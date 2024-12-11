import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Register from '../screens/Register';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen 
      name="Login" 
      component={Login} 
      options={{ headerTitle: 'Login' }} 
    />
    <AuthStack.Screen 
      name="Register" 
      component={Register} 
      options={{ headerTitle: 'Registro' }} 
    />
  </AuthStack.Navigator>
);

export default AuthStackNavigator;
