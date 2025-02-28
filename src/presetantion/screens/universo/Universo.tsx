import { View, Text, StyleSheet } from 'react-native';
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
            {/* <Image source={{ uri: item.imageUrl }} style={{ width: 200, height: 200 }} /> */}
          </View>
        )}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  contentuni:
  {
    backgroundColor: '#212A37',
    flex: 1
  },
  container: {
  
    padding: 10,
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