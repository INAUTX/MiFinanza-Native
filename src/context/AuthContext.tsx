import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

interface AuthContextProps {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (correo: string, contraseña: string) => Promise<void>;
  register: (correo: string, contraseña: string) => Promise<void>;
  logout: () => void;
}

interface User {
  correo: string;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  token: null,
  loading: true,
  login: async () => {},
  register: async () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        const storedUser = await AsyncStorage.getItem('user');
        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error al cargar el token:', error);
      } finally {
        setLoading(false);
      }
    };

    loadToken();
  }, []);

  const login = async (correo: string, contraseña: string) => {
    try {
        console.log("antes de login",correo, contraseña);
      const response = await axios.post('http://10.0.2.2:3000/auth/login', {
        correo,
        contraseña,
      });
      console.log("respuesta",response.data);
      
      if (response.data.success) {
        const { token } = response.data;
        setToken(token);
        setUser({ correo });
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('user', JSON.stringify({ correo }));
      } else {
        throw new Error('Login fallido');
      }
    } catch (error) {
      console.error('Error en login:', error);
      throw error;
    }
  };

  const register = async (correo: string, contraseña: string) => {
    try {
        // console.log("respuesta",response.data);
        console.log("correo",correo);
        console.log("contraseña",contraseña);
        // console.log(response);
      const response = await axios.post('http://10.0.2.2:3000/auth/register', {
        correo,
        contraseña,
      });
      
      
      

      if (response.data.success) {
        // Opcional: iniciar sesión automáticamente después de registrarse
        await login(correo, contraseña);
      } else {
        throw new Error('Registro fallido');
      }
    } catch (error) {
      console.error('Error en registro:', error);
      throw error;
    }
  };

  const logout = async () => {
    setToken(null);
    setUser(null);
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
