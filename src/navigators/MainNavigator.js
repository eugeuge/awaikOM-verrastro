import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { useSelector } from 'react-redux';

import TabsNavigator from './TabsNavigator'
import AuthNavigator from './AuthNavigator';


const MainNavigator = () => {

  const isAuth =useSelector(state=>state.auth.isAuth);

  return (
    <NavigationContainer>
        {isAuth ? <TabsNavigator/> : <AuthNavigator/>}
    </NavigationContainer>
  )
}

export default MainNavigator