import React, {useContext} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet, Text, View} from 'react-native';

import Home from '../screens/Home';
import Presupuestos from '../screens/Presupuestos';
import AgregarGastoIngreso from '../screens/AgregarGastoIngreso';
import InformacionGastoIngreso from '../screens/InformacionGastoIngreso';
import Graficas from '../screens/Graficas';
import Categorias from '../screens/Categorias';
import {AuthContext} from '../context/AuthContext';

export type AppDrawerParamList = {
  Home: undefined;
  Presupuestos: undefined;
  AgregarGastoIngreso: undefined;
  InformacionGastoIngreso: undefined;
  Graficas: undefined;
  Categorias: undefined;
};

const Drawer = createDrawerNavigator<AppDrawerParamList>();

const CustomHeaderBackground = () => (
  <View style={styles.headerBackground} />
);

const AppDrawerNavigator = () => {
  return (
    <Drawer.Navigator

      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}
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
        drawerStyle: {width: 320, backgroundColor: '#284E3F'},
        drawerActiveTintColor: '#e9ebd8',
        drawerInactiveTintColor: '#EBEDD7',
        drawerLabelStyle: {marginLeft: -5, fontSize: 16},
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: 'Inicio',
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Presupuestos"
        component={Presupuestos}
        options={{
          drawerLabel: 'Presupuestos',
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="currency-usd"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="AgregarGastoIngreso"
        component={AgregarGastoIngreso}
        options={{
          drawerLabel: 'Agregar Gasto/Ingreso',
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="InformacionGastoIngreso"
        component={InformacionGastoIngreso}
        options={{
          drawerLabel: 'Info Gasto/Ingreso',
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="information-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Graficas"
        component={Graficas}
        options={{
          drawerLabel: 'Gráficas',
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="chart-line"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Categorias"
        component={Categorias}
        options={{
          drawerLabel: 'Categorías',
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: any) => {
  const {user, logout} = useContext(AuthContext);
  const username = user?.correo.split('@')[0] || 'Usuario';

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.userInfoSection}>
        <MaterialCommunityIcons
          name="account-circle"
          size={80}
          color="#c6c7bd"
        />
        <Text style={styles.username}>Hola, {username}</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Cerrar Sesión"
        labelStyle={{color: '#9d9e95'}}
        icon={({color, size}) => (
          <MaterialCommunityIcons name="logout" color="#9d9e95" size={size} />
        )}
        onPress={logout}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  userInfoSection: {
    padding: 16,
    alignItems: 'center',
  },
  username: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EBEDD7',
  },
  headerBackground: {
    flex: 1,
    backgroundColor: '#284E3F',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
});

export default AppDrawerNavigator;
