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

import Presentacion from './src/screens/Presentacion';
import Header from './src/components/Header';
import MainNavigator from './src/navigators/MainNavigator';
import store from './src/store';



export default function App() {
  const [presentacion, setPresentacion] = useState (true);

  useEffect(()=> {
    setTimeout( () => {
      setPresentacion(false);
    }, 5000);
  }, []);

  
  const [fontsLoaded] = useFonts ({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);


  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.screen}>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

    <View style={styles.screen} onLayout={onLayoutRootView}>
     {presentacion && <Presentacion/>}

     {!presentacion && <Header/>}
     {!presentacion && <MainNavigator/>}    

    </View>

    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
