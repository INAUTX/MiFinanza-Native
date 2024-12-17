import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface HeaderPresupuestoProps {
  currentIcon: string;
  currentName: string;
  currentValue: number;
  textColor: string;
  onPress: () => void;
}

const HeaderPresupuesto: React.FC<HeaderPresupuestoProps> = ({
  currentIcon,
  currentName,
  currentValue,
  textColor,
  onPress,
}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.headerPresupuesto} onPress={onPress}>
        <MaterialCommunityIcons
          name={currentIcon}
          size={30}
          color={textColor}
        />
        <Text style={[styles.headerText, { color: textColor }]}>{currentName}</Text>
        <Text style={[styles.headerTextValue, { color: textColor }]}>{currentValue.toLocaleString()} COL$</Text>
        <MaterialCommunityIcons
          name="chevron-down-box"
          size={20}
          color={textColor}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
    marginTop: 15,
  },
  headerPresupuesto: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  headerTextValue: {
    fontSize: 16,
    marginHorizontal: 5,
  },
});

export default HeaderPresupuesto;
