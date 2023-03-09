import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

import Tematicas from './src/screens/Tematicas';
import Alarm from './src/screens/Alarm';
import Header from './src/components/Header';
import Presentacion from './src/screens/Presentacion';
import SetDespertador from './src/screens/SetDespertador';
import AlarmON from './src/screens/AlarmON';

export default function App() {
  const [presentacion, setPresentacion] = React.useState (true);

  React.useEffect(()=> {
    setTimeout( () => {
      setPresentacion(false);
    }, 2500);
  }, []);

  const [alarmDefined, setAlarmDefined] = React.useState ('');

    const setAlarm = alarm => {
    setAlarmDefined(alarm);
}

  
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.screen} onLayout={onLayoutRootView}>
     {presentacion && <Presentacion/>}

     {!presentacion && <Header/>}     
     {  
        !alarmDefined
          ? <SetDespertador alarmON={setAlarm}/>
          : <AlarmON alarmON={setAlarm} selectedNumber={alarmDefined} />
      }
      

    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    flex: 1,
  },
});
