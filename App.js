import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {Provider} from 'react-redux';

SplashScreen.preventAutoHideAsync();

import Header from './src/components/Header';
import MainNavigator from './src/navigators/MainNavigator';
import store from './src/store';



export default function App() {



  
  const [fontsLoaded] = useFonts ({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {      
      //setTimeout(async () => {
        await SplashScreen.hideAsync();
     // }, 3000);
    }
  }, [fontsLoaded]);


  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
  
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

    <View style={styles.screen} onLayout={onLayoutRootView}>
      
     {<Header/>}
     {<MainNavigator/>}    

    </View>

    </TouchableWithoutFeedback>

    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
