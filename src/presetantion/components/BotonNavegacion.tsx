import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Pressable, StyleSheet, Text} from 'react-native';

interface Props {
    label: String;
    onPress: () => void;
}

export const BotonNavegacion = ({ label, onPress }: Props) => {
  
    return (
        
        <Pressable 
            onPress={onPress}  
            style={({ pressed }) => [
                styles.botn, 
                { opacity: pressed ? 0.6 : 1 }
            ]}
        >
            <LinearGradient
                colors={['#FFBD33', '#983907']} 
                style={styles.gradient} 
            >
                <Text style={styles.txtbtn}>{label}</Text>
            </LinearGradient>
        </Pressable>

    
    );
};

const styles = StyleSheet.create({ 
    gradient: {
        borderRadius: 8, 
        width:156,
    },
    txtbtn:
    {
        color: '#0D1B29',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign:'center'
    },
    botn:
    {
        backgroundColor:'#983907',
        borderWidth:1.8,
        borderRadius:8,
        borderColor:'#0D1B29',
        width:160,
    }  
  });
