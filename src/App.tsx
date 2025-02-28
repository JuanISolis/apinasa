import React from 'react'
import { StyleSheet } from 'react-native';
import { HomeScreen } from './presetantion/screens/home/homeScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigator } from './presetantion/routers/StackNavigator';

export default function App() {
  return (
    
    <SafeAreaView style={styles.conteinermain}>
      
      <StackNavigator/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conteinermain: {
    flex: 1,
    backgroundColor: '#212A37',
  },
 
});
