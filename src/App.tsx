import React from 'react'
import { StyleSheet } from 'react-native';
import { HomeScreen } from './presetantion/screens/home/homeScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigator } from './presetantion/routers/StackNavigator';
import { LinearGradient } from 'expo-linear-gradient';

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
    backgroundColor: 'black',
  },
  gradient: {
    borderRadius: 8, 
    width:156,
  },
 
});
