import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

import Button from '../components/Button'
import NumberContainer from '../components/NumberContainer'
import { resetAlarm } from '../store/actions/alarm.action';
import { useDispatch, useSelector } from 'react-redux';

import COLORS from '../constants/Colors'
const { height, width } = Dimensions.get("window");


const AlarmON = () => {
  const dispatch = useDispatch();
  const tempDate = useSelector(state => state.alarm.dateTime);
  const meditacion = useSelector(state => state.alarm.meditacion.name);

  const fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
  const minutes = tempDate.getMinutes() < 10 ? '0' + tempDate.getMinutes() : tempDate.getMinutes();
  const fTime = tempDate.getHours() + ':' + minutes;
  return (
    <View style={styles.container}>
      <View style={styles.selectedNumberContainer}>

        <Text>Horario Elegido</Text>
        <NumberContainer>{fTime}</NumberContainer>

        <Text>Día Elegido</Text>
        <NumberContainer>{fDate}</NumberContainer>

        <Text>meditación Elegida</Text>
        <NumberContainer>{meditacion}</NumberContainer>

        <Button
          styleButtonType={styles.buttonConfirm}
          onPress={() => { dispatch(resetAlarm()) }}
          styleText={styles.buttonSetText}
          title="Eliminar Alarma">
        </Button>

      </View>
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
  selectedNumberContainer: {
    marginTop: 20,
    width: width * 0.6,
    maxWidth: width * 0.6,
    height: height * 0.23,
    padding: 10,
    alignItems: 'center',
  },
  buttonConfirm: {
    padding: width * 0.029,
    width: width * 0.5,
    height: height * 0.06,
    marginTop: height * 0.025,
    backgroundColor: COLORS.alerta,
  },
  buttonSetText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
})
