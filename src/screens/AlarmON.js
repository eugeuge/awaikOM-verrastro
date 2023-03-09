import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import Card from '../components/Card'
import Button from '../components/Button'
import NumberContainer from '../components/NumberContainer'

const AlarmON = ({alarmON, selectedNumber}) => {
  return (
    <View style={styles.container}>
            <Card style={styles.selectedNumberContainer}>
              <Text>Horario Elegido</Text>
              <NumberContainer>{selectedNumber}:00 Horas </NumberContainer>
              <Button title="Eliminar Alarma" onPress={()=>{
                alarmON('')
              }}/>
            </Card>
    </View>
  )
}

export default AlarmON

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
      },
    selectedNumberContainer:{
        marginTop: 20,
        width: 200,
        maxWidth: '80%',
        padding:10,
        alignItems: 'center',
      }
    })
