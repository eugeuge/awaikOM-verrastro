import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import COLORS from '../constants/Colors'
import Button from '../components/Button';

const RegisterOKScreen = ({ navigation }) => {

  const onHandleRegisterOK = () => {
        navigation.navigate('Login')
}

  return (
    <View style={styles.screen}>
      <View style={styles.container}>

      <Text style={styles.title}>¡Felicitaciones!</Text>
      <Text style={styles.secondTitle}>Tu registro fue realizado correctamente.</Text>
      <Text style={styles.text}>A continuación deberás realizar el Log IN a la app con el usuario y clave generados.</Text>
      <Text style={styles.text}>Una vez dentro de la aplicación, podrás completar tu perfil en la pestaña "Usuario" del menú de navegación ubicado en la parte inferior de tu pantalla.</Text>
      <Button
        styleButtonType={styles.buttonLogin}
        title= "Login"
        styleText={styles.buttonLoginText}
        onPress={onHandleRegisterOK}
      >
      </Button>
      </View>

    </View>
  )
}

export default RegisterOKScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
title: {
    fontSize: 24,
    fontFamily: 'open-sans-bold',
    marginBottom: 12,
    textAlign: 'center',
    color: COLORS.text,
},
secondTitle: {
  fontSize: 19,
  fontFamily: 'open-sans-bold',
  marginBottom: 12,
  textAlign: 'center',
  color: COLORS.text,
},
text: {
  fontSize: 16,
  fontFamily: 'open-sans',
  marginBottom: 12,
  textAlign: 'center',
  color: COLORS.text,
},
container: {
  width: '80%',
  maxWidth: 400,
  padding: 25,
  margin: 12,
  marginTop: 0,
  borderColor: COLORS.grey,
  borderWidth: 0.5,
  borderRadius: 10,
  backgroundColor: '#fff',
},
buttonLogin: {
  padding: 10,
  margin: 12,
  //marginTop:2,
  minWidth: 180,
  backgroundColor: COLORS.primary,
},
buttonLoginText: {
  color: '#FFFFFF',
  fontSize: 17,
}
})