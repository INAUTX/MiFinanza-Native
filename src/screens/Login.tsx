import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Login</Text>
      {/* Aquí irán los campos de texto y el botón de login */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  title: {
    fontSize: 20, 
    fontWeight: 'bold'
  }
});

export default Login;
