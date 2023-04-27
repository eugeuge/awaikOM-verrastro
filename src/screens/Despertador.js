import { View } from 'react-native'
import React, { useState } from "react";


import AlarmON from '../components/AlarmON';
import SetDespertador from '../components/SetDespertador';
import { useSelector } from 'react-redux'

function Despertador ({navigation}) {

  const alarmSet = useSelector(state => state.alarm.isSet)


const elegirMeditacion = () => {
  navigation.navigate('Elegí el tipo de meditación')
}

  return (
    <View>
        {  
        !alarmSet
          ? <SetDespertador elegirMeditacion={elegirMeditacion}/>
          : <AlarmON/>
        }
    </View>
  )
}

export default Despertador;