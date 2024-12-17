import React from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Presupuesto } from '../types';

interface PresupuestoModalProps {
  visible: boolean;
  onClose: () => void;
  presupuestos: Presupuesto[];
  onSelect: (presupuesto: Presupuesto) => void;
  backgroundColor: string;
  textColor: string;
}

const PresupuestoModal: React.FC<PresupuestoModalProps> = ({
  visible,
  onClose,
  presupuestos,
  onSelect,
  backgroundColor,
  textColor,
}) => {
  const renderPresupuestoItem = ({ item }: { item: Presupuesto }) => (
    <TouchableOpacity onPress={() => onSelect(item)} style={styles.dropdownItem}>
      <View style={styles.dropdownItemContent}>
        <MaterialCommunityIcons
          name={item.icono}
          size={24}
          color={textColor}
          style={styles.icon}
        />
        <Text style={[styles.dropdownItemText, { color: textColor }]}>{item.nombre}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContainer, { backgroundColor }]}>
          <FlatList
            data={presupuestos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderPresupuestoItem}
          />
          <TouchableOpacity onPress={onClose} style={styles.dropdownItem}>
            <View style={styles.dropdownItemContent}>
              <MaterialCommunityIcons
                name="wallet"
                size={24}
                color={textColor}
                style={styles.icon}
              />
              <Text style={[styles.dropdownItemText, { color: textColor }]}>Total</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000055',
  },
  modalContainer: {
    marginHorizontal: 40,
    borderRadius: 8,
    padding: 10,
  },
  dropdownItem: {
    padding: 10,
  },
  dropdownItemText: {
    fontSize: 16,
  },
  dropdownItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
});

export default PresupuestoModal;
