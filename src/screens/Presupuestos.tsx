import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const Presupuestos: React.FC = () => {

  const { backgroundColor, textColor } = useTheme();

  return (
    <View style={[styles.container , { backgroundColor}]}>
      <Text style={[styles.title, { color: textColor }]}>Pantalla de Presupurstos</Text>
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
