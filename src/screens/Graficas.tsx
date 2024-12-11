import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const Graficas: React.FC = () => {

  const { backgroundColor, textColor } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Pantalla de Gráficas</Text>
      {/* Aquí se mostrará las gráficas filtradas por día, semana, mes. Vista general, sólo gastos o sólo ingresos */}
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

export default Graficas;
