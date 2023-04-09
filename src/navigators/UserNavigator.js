import { Platform } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import UserScreen from '../screens/UserScreen'

const Stack = createNativeStackNavigator();

const UserNavigator = () => {
  return (
<Stack.Navigator>
    <Stack.Screen name="Usuario" component={UserScreen}/>
</Stack.Navigator>
  )
}

export default UserNavigator