import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InformacionGastoIngreso: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Información Gasto/Ingreso</Text>
      {/* Aquí se mostrará la info del gasto/ingreso seleccionado, con opción de editar o eliminar */}
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

export default InformacionGastoIngreso;
