import React from 'react'
import { Platform } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Options from '../screens/Options'
import ThemesScreen from '../screens/ThemesScreen'
import Despertador from '../screens/Despertador'

const Stack = createNativeStackNavigator();

const MenuNavigator = () => {
  return (
        <Stack.Navigator initialRouteName="Menu">

            <Stack.Screen name="Menu" component={Options}/>
            <Stack.Screen name="Tematicas" component={ThemesScreen}/>
            <Stack.Screen name="Despertador" component={Despertador}/>

        </Stack.Navigator>


  )
}

export default MenuNavigator