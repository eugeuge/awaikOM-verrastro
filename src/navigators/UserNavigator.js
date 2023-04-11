import { Platform } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import UserScreen from '../screens/UserScreen'
import UserPhotoScreen from '../screens/UserPhotoScreen'
import UserDataScreen from '../screens/UserDataScreen'
import UserSesionScreen from '../screens/UserSesionScreen'

const Stack = createNativeStackNavigator();

const UserNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Usuario">
      <Stack.Screen name="Usuario" component={UserScreen} />
      <Stack.Screen name="Foto de Perfil" component={UserPhotoScreen}
        options={{ unmountOnBlur: true }} />
      <Stack.Screen name="Mis Datos" component={UserDataScreen}
        options={{ unmountOnBlur: true }} />
      <Stack.Screen name="Mi Sesión" component={UserSesionScreen}
        options={{ unmountOnBlur: true }} />
    </Stack.Navigator>
  )
}

export default UserNavigator