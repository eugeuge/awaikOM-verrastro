import { StyleSheet, Image, View } from 'react-native'
import logo from '../../assets/logo.png';
import React from 'react'

const Header = () => {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo}/>
      </View>
    )
  }
  
  export default Header
  
  const styles = StyleSheet.create({
      container: {
          width: '100%',
          height: 70,
          paddingTop: 5,
          alignItems: 'center',
          justifyContent: 'center'
      },
      logo:{
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
      },
  })