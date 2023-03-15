import { View } from 'react-native'
import React, { useState } from "react";


import AlarmON from '../components/AlarmON';
import SetDespertador from '../components/SetDespertador';

function Despertador () {

    const [alarmDefined, setAlarmDefined] = useState ('');

    const setAlarm = alarm => {
    setAlarmDefined(alarm);
}

  return (
    <View>
        {  
        !alarmDefined
          ? <SetDespertador setAlarm={setAlarm}/>
          : <AlarmON setAlarm={setAlarm} selectedNumber={alarmDefined} />
        }
    </View>
  )
}

export default Despertador;