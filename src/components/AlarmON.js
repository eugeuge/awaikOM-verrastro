import { View, Text, StyleSheet, Dimensions} from 'react-native'
import React from 'react'

import Card from '../components/Card'
import Button from '../components/Button'
import NumberContainer from '../components/NumberContainer'

const { height, width } = Dimensions.get("window");


const AlarmON = ({setAlarm, selectedNumber}) => {
  return (
    <View style={styles.container}>
            <Card style={styles.selectedNumberContainer}>
              <Text>Horario Elegido</Text>
              <NumberContainer>{selectedNumber}:00 Horas </NumberContainer>
              <Button title="Eliminar Alarma" onPress={()=>{
                setAlarm('')
              }}/>
            </Card>
    </View>
  )
}

export default AlarmON;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
      },
    selectedNumberContainer:{
        marginTop: 20,
        width: width * 0.6,
        maxWidth: width * 0.6,
        height: height * 0.23,
        padding:10,
        alignItems: 'center',
      }
    })
