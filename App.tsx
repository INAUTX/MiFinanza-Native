import 'react-native-reanimated'; 
import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from './src/navigation/AppNavigation';
import { AuthProvider } from './src/context/AuthContext';
import { ThemeProvider } from './src/context/ThemeContext'; 

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <ThemeProvider>
          <AppNavigation />
        </ThemeProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
};

export default App;


// ------------


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
