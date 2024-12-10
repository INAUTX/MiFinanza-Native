import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Register: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Registro</Text>
      {/* Aquí irán campos de registro y el botón para registrar */}
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

export default Register;
