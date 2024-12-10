import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';

enableScreens();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;


// import 'react-native-gesture-handler';
// import React from 'react';
// import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
// import { enableScreens } from 'react-native-screens';
// import { NavigationContainer } from '@react-navigation/native';

// enableScreens();

// const App: React.FC = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" />
//       <NavigationContainer>
//         <Text>Hola Mundo</Text>
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// });

// export default App;
