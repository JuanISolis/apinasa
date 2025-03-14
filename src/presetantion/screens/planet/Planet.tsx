import { RouteProp, useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import { RootStackParams } from '../../routers/StackNavigator';
import { PlanetData } from '../../../services/getdata/PlanetData';

export const Planet = () => {

  const params = useRoute<RouteProp<RootStackParams, 'Planeta'>>().params;

  const id = String(params.id);

  const {infplanet} = PlanetData({id});

  console.log({infplanet});


  return (

    <View>

      <Image 
        style={styles.backgroundImage}
        source={require('../../../imagenes/fondo2.jpeg')}
      />

      <FlatList
        data={infplanet}
        keyExtractor={(item) => item.id} // Se agrega keyExtractor para evitar warnings
        renderItem={({ item }) => (

          <View style={styles.contentuni}>

            <Text style={styles.tituloprincipal}>{item.title}</Text>

            <View style={styles.contentimagenprincipal}>
            
              <Image source={{ uri: item.imageUrl }} style={styles.imgenprincipal} />

            </View>
            

            <Text style={styles.textotitulo}>Description:</Text>
          
            <Text style={styles.descripcion}>{item.description}</Text>
            
            <Text style={styles.textotitulo}>More:</Text>

            <FlatList

              data={item.additionalImages}
              keyExtractor={(imageUri, index) => `${item.id}-img-${index}`}
              renderItem={({ item: imageUri }) => (

                <View style={styles.contentimagenprincipal}>
                  
                  <Image source={{ uri: imageUri }} style={styles.imgensecundaria}/>

                </View>
              )}

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
    flex: 1
  },

  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  container: {
  
    padding: 10,
  }, 

  tituloprincipal:
  {
    color: '#FCFFFE',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15

  },

  textotitulo:
  {
    color: '#FCFFFE',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 10,
    borderColor:'#CBE9E8',
    borderBottomWidth: 1.5

  },

  descripcion:
  {
    color: '#FCFFFE',
    fontSize: 20,
    marginBottom: 15,
    padding: 10,
    backgroundColor: 'rgba(20, 36, 51, 0.45)'
  },
  contentimagenprincipal:{
    justifyContent:'space-around',
    alignItems: 'center',
    paddingBottom: 10,
  },

  imgenprincipal:
  {
    width: 300,
    height: 300,
    borderRadius:150,
    borderColor:'#CCB6B0',
    borderWidth: 1
  },

  imgensecundaria:
  {
    width: '85%',
    height: 198,
    borderRadius: 25,
    borderColor:'#CCB6B0',
    borderWidth: 1,
    marginBottom:10
  }

});