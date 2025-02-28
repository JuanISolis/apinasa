import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { BotonNavegacion } from '../../components/BotonNavegacion';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { type RootStackParams } from '../../routers/StackNavigator';

export const HomeScreen = () => {
    const navigation = useNavigation <NavigationProp<RootStackParams>> ();

    return (
    <View style={styles.contentini}>
      <Text style={styles.titulo}>Turista Espacial</Text>
      <Text style={styles.saludo}>¡BIENVENIDO!</Text>
      <Image 
        style={styles.imginicio}
        source={require('../../../imagenes/iniciohm.png')}
      />
      <BotonNavegacion
        label= 'ENTRAR'
        onPress= { () => navigation.navigate('Universo')}
      />
      
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  contentini:
  {
    justifyContent:'center',
    backgroundColor: '#212A37',
    alignItems: 'center',
    flex: 1
  },
  titulo:
  {
    color: '#FCFFFE',
    fontSize: 45,
    borderColor: 'white',
    borderBottomWidth: 3,
  },
  saludo:
  {
    color: '#FCFFFE',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 60,
  },
  imginicio:
  {
    marginTop: 40,
    width: 413,
    height: 413,
    borderColor:'#212A37',
    borderWidth:1
  }
});