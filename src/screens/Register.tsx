// import React, { useState, useContext } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { AuthContext } from '../context/AuthContext';
// import { useNavigation } from '@react-navigation/native';

// type AuthStackParamList = {
//   Login: undefined;
//   Register: undefined;
// };

// type RegisterScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Register'>;

// const Register: React.FC = () => {
//   const navigation = useNavigation<RegisterScreenNavigationProp>();
//   const { register } = useContext(AuthContext);

//   const [correo, setCorreo] = useState<string>('');
//   const [contraseña, setContraseña] = useState<string>('');

//   const handleRegister = async () => {
//     try {
//       await register(correo, contraseña);
//     } catch (error) {
//       Alert.alert('Error', 'Registro fallido');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Registrarse</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Correo"
//         value={correo}
//         onChangeText={setCorreo}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Contraseña"
//         value={contraseña}
//         onChangeText={setContraseña}
//         secureTextEntry
//       />
//       <Button title="Registrarse" onPress={handleRegister} />
//       <View style={styles.loginContainer}>
//         <Text>¿Ya tienes una cuenta?</Text>
//         <Button title="Inicia Sesión" onPress={() => navigation.navigate('Login')} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 24,
//     textAlign: 'center',
//   },
//   input: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
//   loginContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
// });

// export default Register;

import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext'; // Importación de tema

type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

type RegisterScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Register'>;

const Register: React.FC = () => {

  const { backgroundColor, textColor } = useTheme();
  
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const { register } = useContext(AuthContext);

  const [correo, setCorreo] = useState<string>('');
  const [contraseña, setContraseña] = useState<string>('');

  const handleRegister = async () => {
    try {
      console.log(correo, contraseña);
      await register(correo, contraseña);
    } catch (error) {
      Alert.alert('Error', 'Registro fallido');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Registrarse</Text>
      
      <TextInput
        style={[styles.input, { color: textColor, borderBottomColor: textColor }]}
        placeholder="Correo"
        placeholderTextColor={textColor}
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={[styles.input, { color: textColor, borderBottomColor: textColor }]}
        placeholder="Contraseña"
        placeholderTextColor={textColor}
        value={contraseña}
        onChangeText={setContraseña}
        secureTextEntry
      />
      
      {/* Botón de Registrarse */}
      <TouchableOpacity 
        style={[styles.buttonRegister, { backgroundColor: '#FDC22A' }]} 
        onPress={handleRegister}
      >
        <Text style={[styles.buttonText, { color: backgroundColor }]}>Registrarse</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={[styles.bot, { color: textColor }]}>¿Ya tienes una cuenta?</Text>
        
        {/* Botón de Iniciar Sesión */}
        <TouchableOpacity 
          style={[styles.buttonLogin, { backgroundColor: 'rgba(253, 194, 42, 0.8)' }]} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={[styles.buttonText, { color: backgroundColor }]}>Inicia Sesión</Text>
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
  buttonRegister: {
    width: '60%', 
    paddingVertical: 9, 
    borderRadius: 20, 
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5, 
    alignSelf: 'center', 
  },
  buttonLogin: {
    width: '50%', 
    paddingVertical: 8, 
    borderRadius: 20, 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10, 
    alignSelf: 'center', 
    opacity: 0.9, 
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  loginContainer: {
    margin: 10,
    alignItems: 'center',
  },
  bot: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
});

export default Register;
