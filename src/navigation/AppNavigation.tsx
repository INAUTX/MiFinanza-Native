import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './AuthStackNavigator';
import AppDrawerNavigator from './AppDrawerNavigator';
import { AuthContext } from '../context/AuthContext';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const AppNavigation: React.FC = () => {
  const { token, loading } = useContext(AuthContext);

  if (loading) {
    // Pantalla de carga mientras se verifica el token
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {token ? <AppDrawerNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppNavigation;
