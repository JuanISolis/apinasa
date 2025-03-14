import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { BotonNavegacion } from '../../components/BotonNavegacion';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { type RootStackParams } from '../../routers/StackNavigator';

export const HomeScreen = () => {
    const navigation = useNavigation <NavigationProp<RootStackParams>> ();

    return (
    <View style={styles.contentini}>

      <Image 
        style={styles.backgroundImage}
        source={require('../../../imagenes/alienhem.jpg')}
      />

      <Text style={styles.titulo}>Turista Espacial</Text>

      <View style={styles.contentsaludo}>

        <Text style={styles.saludo2}>¡BIENVENIDO!</Text>
        <Text style={styles.saludo1}>¡BIENVENIDO!</Text>
        <Text style={styles.saludo}>¡BIENVENIDO!</Text>

      </View>

      <View style={styles.contentbtn}>

        <BotonNavegacion
          label= 'ENTRAR'
          onPress= { () => navigation.navigate('Universo')}
        />

      </View>
      
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  contentini:
  {
    alignItems: 'center',
    flex: 1
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  contentsaludo:{
    justifyContent:'center',
    alignItems: 'center',
    marginTop:'97%'
  },
  contentbtn:{
    justifyContent:'center',
    alignItems: 'center',
    marginTop:'60%'
  },
  titulo:
  {
    color: '#A3DBDC',
    fontSize: 40,
    borderColor: '#A3DBDC',
    borderBottomWidth: 2, 
    fontWeight: '700'
  },
  saludo:
  {
    color: '#983907',
    fontSize: 45,
    fontWeight: 'bold',
    position: 'absolute',
    
  },
  saludo1:
  {
    color: '#102636',
    fontSize: 46,
    fontWeight: 'bold',
    position: 'absolute',
    
  },
  saludo2:
  {
    color: 'white',
    fontSize: 46.5,
    fontWeight: 'bold',
    position: 'absolute',
    
  },
});