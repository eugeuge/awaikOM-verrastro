import {
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    } from 'react-native'

    import React, { useState } from "react";

import Card from './Card'
import Button from './Button'
import COLORS from '../constants/Colors'
import Input from './Input'
import NumberContainer from './NumberContainer'




const SetDespertador = (setAlarm) => {

const [enteredValue, setEnteredValue] = useState('')
const [confirmed, setConfirmed] = useState(false)
const [selectedNumber, setSelectedNumber] = useState()

const numberInputHandler = inputText => {
  setEnteredValue(inputText.replace(/[^0-9]/g, ''))
}

const resetInputHandler = () => {
  setEnteredValue('');
  setConfirmed(false);
}

const confirmInputHandler = () => {
  const chosenNumber = parseInt(enteredValue)
  if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 24) {
    return
  }
  setConfirmed(true)
  setSelectedNumber(chosenNumber)
  setEnteredValue('')
}

  return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss()
      }}>
        <View style={styles.container}>
          <Text style={styles.title}>Elegí el horario de tu alarma</Text>
          <Card style={styles.inputContainer}>
            <Text style={styles.inputDectiptionText}>¿A qué hora querés despertar? [HH]</Text>
            <Input style={styles.input}
              blurOnSubmit
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='number-pad'
              maxLength={2}
              value={enteredValue}
              onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.button}>
              <Button
              styleButtonType={{backgroundColor:COLORS.alerta,}}
              onPress={resetInputHandler}
              title="Limpiar">
              </Button>
              </View>
              <View style={styles.button}>
              <Button
              styleButtonType={{backgroundColor:COLORS.primary,}}
              onPress={confirmInputHandler}
              title="Confirmar">
              </Button>
              </View>
            </View>
          </Card>
          
          
          {confirmed &&
            <Card style={styles.selectedNumberContainer}>
              <Text>Horario Elegido</Text>
              <NumberContainer>{selectedNumber}:00 Horas</NumberContainer>
              <Button title="Setear Alarma" onPress={()=>{
                setAlarm(selectedNumber)
              }}/>
            </Card>
          }
        </View>
      </TouchableWithoutFeedback>
  )
}

export default SetDespertador;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
      width: 300,
      maxWidth: '80%',
      padding: 20,
      alignItems: 'center'
    },
    inputDectiptionText: {
      textAlign: 'center'
    },
    input: {
      width: 50,
      textAlign: 'center'
    },
    buttonsContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 15
    },
    button: {
      width: 100,
      marginHorizontal: 2
    },
    selectedNumberContainer:{
      marginTop: 20,
      width: 200,
      maxWidth: '80%',
      padding:10,
      alignItems: 'center',
    }
  })