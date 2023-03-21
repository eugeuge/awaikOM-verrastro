import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native'

import TabsNavigator from './TabsNavigator'


const MainNavigator = () => {
  return (
    <NavigationContainer>
        <TabsNavigator/>
    </NavigationContainer>
  )
}

export default MainNavigator