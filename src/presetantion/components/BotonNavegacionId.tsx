import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Pressable, Image, Text, StyleSheet, View } from 'react-native';

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
            ... styles.btn,
    
            opacity: (pressed)? 0.6:1
        })}
        >
                
            <View style={styles.lyt}>

                <LinearGradient
                    colors={['#192A37', '#4D4A50']} 
                    style={styles.gradient} 
                >
                    <Text style={styles.textlyt}>{label}</Text>
                    <Image source={imagen} style={styles.imagenlyt}/>
                    
                </LinearGradient>
            </View>


        </Pressable>
    );
};

const styles = StyleSheet.create({ 
    btn:{
        width:'100%',
        alignItems: 'center',
    },
    lyt:{ 
        width: '95%',
    },
    imagenlyt:
    {
        width:200,
        height: 200,
        borderRadius:100,
        borderColor:'#F9F9E5',
        borderWidth: 0.8
    },
    textlyt:
    {
        width: 118,
        color: 'white',
        fontWeight: 'bold',
        fontSize:20
    } ,
    gradient: {
        flexDirection: 'row', 
        width: '80%',
        height: 198,
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 30,
        borderRadius: 25,
        padding: 50,
        borderColor:'#F9F9E5',
        borderWidth: 0.8
    },
  });

