import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const AgregarGastoIngreso: React.FC = () => {

  const { backgroundColor, textColor } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Pantalla Agregar Gasto/Ingreso</Text>
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
