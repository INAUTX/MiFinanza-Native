import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const Home: React.FC = () => {

  const { backgroundColor, textColor } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor}]}>
      <Text style={[styles.text, { color: textColor }]}>Bienvenido a la Página de Inicio</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default Home;
