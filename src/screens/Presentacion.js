import { View, Image, StyleSheet } from 'react-native'
import presentacion from '../../assets/presentacion.png';
import React from 'react'

const Presentacion = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.presentacion} source={presentacion}/>
    </View>
  )
}

export default Presentacion

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    presentacion:{
      width: '120%',
      height: '120%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
})