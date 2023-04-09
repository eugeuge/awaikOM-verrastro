import { Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import RegisterScreen from '../screens/RegisterScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterOKScreen from '../screens/RegisterOKScreen'

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
<Stack.Navigator
initialRouteName="Login"
screenOptions={{
    headerShown: false
}}>
 <Stack.Screen name="Login" component={LoginScreen}/>
 <Stack.Screen name="Register" component={RegisterScreen}/> 
 <Stack.Screen name="RegisterOK" component={RegisterOKScreen}/> 
</Stack.Navigator>
  )
}

export default AuthNavigator
