import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AgregarGastoIngreso: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Agregar Gasto/Ingreso</Text>
      {/* Aquí el formulario para agregar transacciones, seleccionar cuenta, categoría, fecha, etiquetas, comentarios y fotos */}
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

export default AgregarGastoIngreso;
