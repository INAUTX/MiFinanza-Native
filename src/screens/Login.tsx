import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';

type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;

const Login: React.FC = () => {

  const { backgroundColor, textColor } = useTheme();
  
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { login } = useContext(AuthContext);

  const [correo, setCorreo] = useState<string>('');
  const [contraseña, setContraseña] = useState<string>('');

  const handleLogin = async () => {
    try {
      console.log(correo, contraseña);
      
      await login(correo, contraseña);
      
    } catch (error) {
      Alert.alert('Error', 'Credenciales inválidas');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Iniciar Sesión</Text>
      <TextInput
        style={[styles.input, { color: textColor }]}
        placeholder="Correo"
        placeholderTextColor={textColor}
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={[styles.input, { color: textColor }]}
        placeholder="Contraseña"
        placeholderTextColor={textColor}
        value={contraseña}
        onChangeText={setContraseña}
        secureTextEntry
      />

      <TouchableOpacity 
        style={[styles.buttonLogin, { backgroundColor: '#FDC22A' }]} 
        onPress={handleLogin}
      >
        <Text style={[styles.buttonText, { color: backgroundColor }]}>Login</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={[styles.bot, { color: textColor }]}>¿No tienes una cuenta?</Text>
        
        <TouchableOpacity 
          style={[styles.buttonRegister, { backgroundColor: 'rgba(253, 194, 42, 0.8)' }]} 
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={[styles.buttonText, { color: backgroundColor }]}>Regístrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '92.5%',
    borderColor: '#ccc',
    // borderWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    // borderRadius: 5,
    alignSelf: 'center',
  },
  buttonLogin: {
    width: '60%',
    paddingVertical: 9, // Altura del botón
    borderRadius: 20, // Bordes redondeados
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5, // Espacio entre botones
    alignSelf: 'center', // Centra el botón
  },
  buttonRegister: {
    width: '50%', // Botón más pequeño
    paddingVertical: 8, // Altura más pequeña
    borderRadius: 20, // Bordes redondeados
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10, // Espacio entre botones
    alignSelf: 'center', // Centra el botón
    opacity: 0.9, // Transparencia
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  registerContainer: {
    margin: 10,
    alignItems: 'center',
  },
  bot: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
});

export default Login;
