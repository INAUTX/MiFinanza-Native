import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Presupuestos from '../screens/Presupuestos';
import AgregarGastoIngreso from '../screens/AgregarGastoIngreso';
import InformacionGastoIngreso from '../screens/InformacionGastoIngreso';
import Graficas from '../screens/Graficas';
import Categorias from '../screens/Categorias';

type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

type AppDrawerParamList = {
  Home: undefined;
  Presupuestos: undefined;
  AgregarGastoIngreso: undefined;
  InformacionGastoIngreso: undefined;
  Graficas: undefined;
  Categorias: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AppDrawer = createDrawerNavigator<AppDrawerParamList>();

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

const AppDrawerNavigator= () => (
  
  <AppDrawer.Navigator initialRouteName="Home">
    <AppDrawer.Screen 
      name="Home" 
      component={Home}
      options={{ drawerLabel: 'Inicio' }}
    />
    <AppDrawer.Screen 
      name="Presupuestos" 
      component={Presupuestos}
      options={{ drawerLabel: 'Presupuestos' }}
    />
    <AppDrawer.Screen 
      name="AgregarGastoIngreso" 
      component={AgregarGastoIngreso}
      options={{ drawerLabel: 'Agregar Gasto/Ingreso' }}
    />
    <AppDrawer.Screen 
      name="InformacionGastoIngreso" 
      component={InformacionGastoIngreso}
      options={{ drawerLabel: 'Info Gasto/Ingreso' }}
    />
    <AppDrawer.Screen 
      name="Graficas" 
      component={Graficas}
      options={{ drawerLabel: 'Gráficas' }}
    />
    <AppDrawer.Screen 
      name="Categorias" 
      component={Categorias}
      options={{ drawerLabel: 'Categorías' }}
    />
  </AppDrawer.Navigator>
);

const AppNavigation = () => {
  const token = null; 

  return token ? <AppDrawerNavigator /> : <AuthStackNavigator />;
};

export default AppNavigation;
