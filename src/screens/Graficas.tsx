import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Graficas: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Gráficas</Text>
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
