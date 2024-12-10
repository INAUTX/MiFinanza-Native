import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Categorias: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Categorías</Text>
      {/* Aquí se podrán ver, crear y editar categorías */}
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

export default Categorias;
