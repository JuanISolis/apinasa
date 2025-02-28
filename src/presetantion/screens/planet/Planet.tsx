import { RouteProp, useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { RootStackParams } from '../../routers/StackNavigator';
import { PlanetData } from '../../../services/getdata/PlanetData';

export const Planet = () => {

  const params = useRoute<RouteProp<RootStackParams, 'Planeta'>>().params;

  const id = String(params.id);

  const {infplanet} = PlanetData({id});

  console.log({infplanet});


  return (

    <View>
    <Text>Planet</Text>
    <FlatList
      data={infplanet}
      keyExtractor={(item) => item.id} // Se agrega keyExtractor para evitar warnings
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
          
          <Image source={{ uri: item.imageUrl }} style={{ width: 200, height: 200 }} />
        
          <Text>{item.description}</Text>

          {/* FlatList para mostrar imágenes adicionales */}
          
            <FlatList
              data={item.additionalImages}
              keyExtractor={(imageUri, index) => `${item.id}-img-${index}`}
              renderItem={({ item: imageUri }) => (
                <Image source={{ uri: imageUri }} style={{ width: 200, height: 200, marginTop: 10 }} />
              )}
            />
        </View>
      )}
    />
  </View>

  )
}
