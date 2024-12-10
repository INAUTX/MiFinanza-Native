import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Presupuestos: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Presupuestos</Text>
      {/* Aquí se mostrará el valor total de todos los presupuestos, listado de cada uno con su ícono,
          y un botón "más" para agregar nuevos presupuestos */}
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

export default Presupuestos;
