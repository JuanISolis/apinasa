import React from 'react';
import { Pressable, Image, Text, StyleSheet, View } from 'react-native';
import { red100, white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

interface Props {
    label: string;
    imagen: { uri:string }
    onPress: () => void;
}

export const BotonNavegacionId = ({ label, imagen, onPress }: Props) => {

    return (
        
        <Pressable
        onPress={() => onPress && onPress()} 
        style = {({pressed}) => ({
            // ... styles.botn,
    
            opacity: (pressed)? 0.6:1
        })}
        >

            <View style={styles.lyt}>

                <Text style={styles.textlyt}>{label}</Text>
                <Image source={imagen} style={styles.imagenlyt}/>
                
            </View>

        </Pressable>
    );
};

const styles = StyleSheet.create({ 
    lyt:{
        flexDirection: 'row', 
        width: '85%',
        height: 198,
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 30,
        backgroundColor:'#20415D',
        borderRadius: 25,
        padding: 50,
        shadowColor: '#000', // Color de la sombra (negro)
        shadowOffset: { width: 0, height: 4 }, // Desplazamiento de la sombra
        shadowOpacity: 0.2, // Opacidad de la sombra
        shadowRadius: 6, // Radio de difuminado de la sombra
        // Sombra para Android
        elevation: 5, // Elevación para l
        borderColor:'black',
        borderWidth: 0.5
    },
    imagenlyt:
    {
        width:200,
        height: 200,
        borderRadius:100,
        borderColor:'black',
        borderWidth: 0.5
    },
    textlyt:
    {
        width: 118,
        color: 'white',
        fontWeight: 'bold',
    }  
  });

