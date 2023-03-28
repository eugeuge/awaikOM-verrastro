import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const DetailMeditacionScreen = ({ route, navigation}) => {

  //const { meditacion } = route.params

  const meditacion = useSelector(state => state.meditaciones.selected)


  useEffect(() => {
    navigation.setOptions({
      title: meditacion.name
    })
  },[])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{meditacion.name}</Text>
      <Text>Price: ${meditacion.price}</Text>
      <Text>{meditacion.duration}</Text>
      <Text>{meditacion.description}</Text>
    </View>
  )
}

export default DetailMeditacionScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        fontFamily: 'open-sans-bold',
    }
})