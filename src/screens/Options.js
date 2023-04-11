import { View, StyleSheet } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Button from '../components/Button';
import COLORS from '../constants/Colors';
 import { setUserID } from '../store/actions/user.action';

const Options = ({navigation}) => {

 const dispatch = useDispatch();
 const userProfileID = useSelector(state =>state.user.userProfileID);
 const userLoggedID = useSelector(state =>state.auth.userID);

 const setearUsuario = () => {
  console.log(userProfileID)
  if(userProfileID == 0){
  dispatch(setUserID(userLoggedID))

}
console.log(userProfileID)
}

  return (
    <View style= {styles.container}>
      {setearUsuario()}
      <Button
              styleButtonType={styles.buttonMenu}
              title="Setear Alarma"
              styleText={styles.textMenu}
              onPress={() => { 
                navigation.navigate('Despertador') 
                }}
      >
      </Button>
      <Button
              styleButtonType={styles.buttonMenu}
              title="Elegir Temáticas"
              styleText={styles.textMenu}
              onPress={() => { 
                navigation.navigate('Tematicas') 
                }}
      >
      </Button>
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


