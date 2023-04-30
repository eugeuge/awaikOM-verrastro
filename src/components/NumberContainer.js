import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const { height, width } = Dimensions.get("window");

const NumberContainer = ({children}) => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.number}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    conatiner:{
        borderWidth:2,
        borderColor: Colors.primary,
        padding: height *0.008,
        borderRadius:10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number:{
        color: Colors.primary,
        fontSize: 22,
        textAlign:'center',
    }
})