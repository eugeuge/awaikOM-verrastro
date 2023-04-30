import { View, StyleSheet, Dimensions, Text, ScrollView } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../components/Button';
import COLORS from '../constants/Colors';
import { setUserID } from '../store/actions/user.action';
import AlarmON from '../components/AlarmON';

const { height, width } = Dimensions.get("window");

const Options = ({navigation}) => {

 const dispatch = useDispatch();
 const userProfileID = useSelector(state =>state.user.userProfileID);
 const userLoggedID = useSelector(state =>state.auth.userID);
 const alarmSet = useSelector(state => state.alarm.isSet)

 const setearUsuario = () => {
  if(userProfileID == 0){
  dispatch(setUserID(userLoggedID))

}
console.log(userProfileID)
}

  return (
    <View style= {styles.container}>
      {setearUsuario()}
      
      <Text style={styles.title}>Bienvenid@ a tu Awaikom</Text>
      {alarmSet?
      <AlarmON/>
      : <View>
        <Text style={styles.text}>No tenés alarmas definidas.</Text>
        <Text style={styles.textLargo}>Podés elegir la hora, el día y la meditación con la que quieras despertar desde el botón "Alarma" del menú inferior.</Text>
       </View>
      }
    
    </View>
  )
}

export default Options

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 20,
    alignItems: 'center',
},
title: {
  fontSize: 20,
  fontFamily: 'open-sans-bold',
  marginTop: height * 0.02,
  width: width * 0.5,
  height: height * 0.07,
  textAlign: 'center',
  color: COLORS.text,
},
text: {
  fontSize: 19,
  fontFamily: 'open-sans-bold',
  marginTop: height * 0.04,
  width: width * 0.5,
  height: height * 0.07,
  textAlign: 'center',
  color: COLORS.primary,
},
textLargo: {
  fontSize: 17,
  fontFamily: 'open-sans-bold',
  marginTop: height * 0.04,
  width: width * 0.5,
  height: height * 0.20,
  textAlign: 'center',
  color: COLORS.text,
},
buttonMenu:{
  padding:10,
  margin: 10,
  minWidth: 180,
  backgroundColor:COLORS.primary,
},
textMenu:{
  color: '#FFFFFF',
}
})


