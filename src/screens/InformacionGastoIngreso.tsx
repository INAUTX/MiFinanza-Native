import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const InformacionGastoIngreso: React.FC = () => {

  const { backgroundColor, textColor } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Pantalla Información Gasto/Ingreso</Text>
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
