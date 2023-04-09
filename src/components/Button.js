import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({
  styleButtonType,
  styleText,
  onPress,
  title
}) => {
  return (
<TouchableOpacity
style={[styles.button, styleButtonType]}
onPress={onPress}
  >
    <Text style={styleText}>{title}</Text>
    </TouchableOpacity>

  )
}

export default Button;

const styles = StyleSheet.create({
    button:{
        padding:8,
        minWidth: 80,
        alignItems: "center",
        borderRadius:5,
    }
});