import { Platform } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Tematicas from '../screens/Tematicas'

const Stack = createNativeStackNavigator();

const TematicasNavigator = () => {
  return (
<Stack.Navigator>
    <Stack.Screen name="Temáticas" component={Tematicas}/>
</Stack.Navigator>
  )
}

export default TematicasNavigator