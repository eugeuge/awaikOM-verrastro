import { View, StyleSheet } from 'react-native'
import React from 'react'

import Button from '../components/Button';
import COLORS from '../constants/Colors'

const Options = ({navigation}) => {
  return (
    <View style= {styles.container}>
      <Button
              styleButtonType={styles.buttonMenu}
              title="Setear Alarma"
              styleText={styles.textMenu}
              onPress={() => { 
                navigation.navigate('Despertador') 
                }}
      >
      </Button>
      <Button
              styleButtonType={styles.buttonMenu}
              title="Elegir Temáticas"
              styleText={styles.textMenu}
              onPress={() => { 
                navigation.navigate('Tematicas') 
                }}
      >
      </Button>
    </View>
  )
}

export default Options

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 20,
    alignItems: 'center',
},
buttonMenu:{
  padding:10,
  margin: 10,
  minWidth: 180,
  backgroundColor:COLORS.primary,
},
textMenu:{
  color: '#FFFFFF',
}
})


