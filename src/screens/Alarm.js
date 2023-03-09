import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import SetDespertador from '../screens/SetDespertador';
import Tematicas from '../screens/Tematicas';

const Alarm = () => {
const [alarmDefined, setAlarmDefined] = React.useState ('');

const setAlarm = alarm => {
    setAlarmDefined(alarm);
}

  return (
    <View>
    <Header/>
    {
        !alarmDefined
          ? <SetDespertador alarmON={setAlarm}/>
          : <Tematicas />
      }
    </View>
  )
}

export default Alarm