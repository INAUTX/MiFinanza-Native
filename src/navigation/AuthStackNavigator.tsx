import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Register from '../screens/Register';
import { StyleSheet, View } from 'react-native';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const CustomHeaderBackground = () => (
  <View style={styles.headerBackground} />
);

const AuthStackNavigator = () => (
  <AuthStack.Navigator
  screenOptions={{
    headerShown: true,
    headerTransparent: true,
    headerBackground: () => <CustomHeaderBackground />,
    headerTitleAlign: 'center',
    headerTitleStyle: {
      color: '#EBEDD7',
      fontWeight: 'bold',
    },
    headerTintColor: '#EBEDD7',
  }}
  >
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

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    backgroundColor: '#284E3F',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
});

export default AuthStackNavigator;
