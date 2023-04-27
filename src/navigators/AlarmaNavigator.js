import { Platform } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Despertador from '../screens/Despertador'
import DespertadorMeditaciones from '../screens/DespertadorMeditacionesScreen'
import DespertadorMeditacionesList from '../screens/DespertadorMeditacionesListScreen'
import DespertadorMeditacionesDetail from '../screens/DespertadorMeditacionesDetailScreen'

const Stack = createNativeStackNavigator();

const AlarmaNavigator = () => {
  return (
<Stack.Navigator>
    <Stack.Screen name="Alarma" component={Despertador}
    options={{ unmountOnBlur: true }}/>
    <Stack.Screen name="Elegí el tipo de meditación" component={DespertadorMeditaciones}
    options={{ unmountOnBlur: true }}/>
    <Stack.Screen name="Tu meditación" component={DespertadorMeditacionesList}
    options={{ unmountOnBlur: true }}/>
        <Stack.Screen name="Detalle" component={DespertadorMeditacionesDetail}
    options={{ unmountOnBlur: true }}/>



</Stack.Navigator>
  )
}

export default AlarmaNavigator