import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import HeaderPresupuesto from '../components/header-presupuesto.component';
import PresupuestoModal from '../components/modal-presupuesto.component';
import { Presupuesto } from '../types';
import { getToken } from '../utils/getToken';

const fetchPresupuestos = async (): Promise<Presupuesto[]> => {
  const token = await getToken();

  if (!token) {
    Alert.alert('Error', 'No se pudo obtener el token');
    return [];
  }

  try {
    const response = await fetch('http://10.0.2.2:3000/presupuestos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al obtener presupuestos');
    }


    const data: Presupuesto[] = await response.json();
    return data;

  } catch (error: any) {
    console.error('Error fetching presupuestos:', error);
    Alert.alert('Error', error.message || 'Ocurrió un error al obtener los presupuestos.');
    return []; 
  }
};

const Home: React.FC = () => {
  const { backgroundColor, textColor } = useTheme();
  const [presupuestos, setPresupuestos] = useState<Presupuesto[]>([]);
  const [selectedPresupuesto, setSelectedPresupuesto] = useState<Presupuesto | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadPresupuestos = async () => {
      setLoading(true);
      const data = await fetchPresupuestos();
      console.log(data);
      
      setPresupuestos(data);
      setLoading(false);
    };
    loadPresupuestos();
  }, []);

  const totalPresupuesto = presupuestos.reduce(
    (sum, p) => sum + parseFloat(p.presupuesto_inicial || '0'),
    0
  );

  const currentName = selectedPresupuesto ? selectedPresupuesto.nombre : 'Total';
  const currentValue = selectedPresupuesto
    ? parseFloat(selectedPresupuesto.presupuesto_inicial)
    : totalPresupuesto;
  const currentIcon = selectedPresupuesto ? selectedPresupuesto.icono : '🏠';

  const handleSelectPresupuesto = (item: Presupuesto) => {
    console.log('Presupuesto seleccionado:',"icono", item.icono);
    setSelectedPresupuesto(item);
    setModalVisible(false);
  };

  if (loading) {
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <ActivityIndicator color={textColor} size="large" />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <HeaderPresupuesto
        currentIcon={currentIcon}
        currentName={currentName}
        currentValue={currentValue}
        textColor={textColor}
        onPress={() => setModalVisible(true)}
      />

      {/* Modal para selección de presupuesto */}
      <PresupuestoModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        presupuestos={presupuestos}
        onSelect={handleSelectPresupuesto}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />

      {/* Contenido Principal */}
      <View style={styles.contentContainer}>
        <Text style={[styles.text, { color: textColor }]}>
          Aquí irán el gráfico y los detalles de{' '}
          {selectedPresupuesto ? selectedPresupuesto.nombre : 'Todos los presupuestos'}.
        </Text>
        {/* Aquí puedes agregar tus gráficos y detalles de ingresos/gastos */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;