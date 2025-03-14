import { View, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { BotonNavegacionId } from '../../components/BotonNavegacionId';
import { type NavigationProp, useNavigation } from '@react-navigation/native'; 
import { UniversoData } from '../../../services/getdata/UniversoData'
import { type RootStackParams } from '../../routers/StackNavigator';


export const Universo = () => {

  const navigation = useNavigation <NavigationProp<RootStackParams>> ();

  const { universo } = UniversoData();
    
  return (
    <View style={styles.contentuni}>

      <Image 
        style={styles.backgroundImage}
        source={require('../../../imagenes/fondo.jpeg')}
      />

      <FlatList
        data={universo} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View style={styles.container}>

            <BotonNavegacionId
              label={item.title}
              imagen={{ uri: item.imageUrl }}
              onPress= {() => navigation.navigate('Planeta', {id : item.id})}
            />
            
          </View>

        )}

      />

    </View>
  )
}


const styles = StyleSheet.create({

  contentuni:
  {
    backgroundColor: 'transparent',
    flex: 1,
  },

  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  container: {
    // backgroundColor:'red',
    // borderColor: 'white',
    // borderWidth:2,
    // borrar


    marginTop: 10,
    marginBottom:5,
    width:'100%',
    alignItems: 'center',
  }, 
});