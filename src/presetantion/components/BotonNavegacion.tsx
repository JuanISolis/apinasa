import React from 'react';
import { Pressable, StyleSheet, Text} from 'react-native';

interface Props {
    label: String;
    onPress: () => void;
}

export const BotonNavegacion = ({ label, onPress }: Props) => {
  
    return (
        
        <Pressable 
            onPress={() => onPress && onPress()} 
            style = {({pressed}) => ({
                ... styles.botn,
        
                opacity: (pressed)? 0.6:1
            })}
        >

            <Text style={styles.txtbtn}>{label}</Text>
        
        </Pressable>
    
    );
};

const styles = StyleSheet.create({ 
    txtbtn:
    {
        color: '#FCFFFE',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign:'center'
    },
    botn:
    {
        backgroundColor:'#B64914',
        marginTop: 60,
        borderWidth:1,
        borderRadius:8,
        borderColor:'#7FE4F2',
        width:160,
        paddingHorizontal:4
    }  
  });
