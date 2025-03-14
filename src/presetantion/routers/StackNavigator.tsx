import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/homeScreen';
import { Planet } from '../screens/planet/Planet';
import { Universo } from '../screens/universo/Universo';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export type RootStackParams = {
    Inicio: undefined;
    Planeta: { id: string };
    Universo: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (

        <NavigationContainer>

            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        elevation: 0,
                        backgroundColor: 'black', 
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',  
                }}
            >
                <Stack.Screen 
                    options={{ headerShown: false }} 
                    name="Inicio" 
                    component={HomeScreen} 
                />
                <Stack.Screen 
                    options={{ headerTitle: 'Universo' }} 
                    name="Universo" 
                    component={Universo} 
                />
                <Stack.Screen 
                    options={{ headerTitle: 'Planeta' }} 
                    name="Planeta" 
                    component={Planet} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
