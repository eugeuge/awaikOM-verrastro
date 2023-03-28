import { Platform } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import ThemesScreen from '../screens/ThemesScreen'
import ThemeMeditacionScreen from '../screens/ThemeMeditacionScreen'
import DetailMeditacionScreen from '../screens/DetailMeditacionScreen'

const Stack = createNativeStackNavigator();

const TematicasNavigator = () => {
  return (
<Stack.Navigator initialRouteName="Tematicas">
    <Stack.Screen name="Tematicas" component={ThemesScreen}/>
    <Stack.Screen name="Meditaciones Por Temática" component={ThemeMeditacionScreen}/>
    <Stack.Screen name="Detalle Meditación" component={DetailMeditacionScreen}/>

</Stack.Navigator>
  )
}

export default TematicasNavigator