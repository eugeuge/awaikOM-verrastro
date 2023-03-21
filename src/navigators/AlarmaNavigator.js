import { Platform } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Despertador from '../screens/Despertador'

const Stack = createNativeStackNavigator();

const AlarmaNavigator = () => {
  return (
<Stack.Navigator>
    <Stack.Screen name="Alarma" component={Despertador}/>
</Stack.Navigator>
  )
}

export default AlarmaNavigator