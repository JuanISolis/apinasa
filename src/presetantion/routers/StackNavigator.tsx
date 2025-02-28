import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/homeScreen';
import { Planet } from '../screens/planet/Planet';
import { Universo } from '../screens/universo/Universo';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export type RootStackParams = {
    Inicio:undefined,
    Planeta:{ id : String},
    Universo:undefined
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{   
                    headerStyle : {
                        elevation: 0
                    }
                }}
            >
                <Stack.Screen 
                    options={{
                        headerShown:false
                    }}
                    name="Inicio" component={HomeScreen}
                />
                <Stack.Screen name="Universo" component={Universo}/>
                <Stack.Screen name="Planeta" component={Planet}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
    
};

const styles = StyleSheet.create({
  conteinermain: {
    flex: 1,
    backgroundColor: '#212A37',
  },
 
});