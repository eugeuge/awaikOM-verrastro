import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const Button = ({
  styleButtonType,
  styleText,
  onPress,
  title
}) => {
  return (
<Pressable
style={[styles.button, styleButtonType]}
onPress={onPress}
  >
    <Text style={styleText}>{title}</Text>
    </Pressable>

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