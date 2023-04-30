import { StyleSheet, Text, ScrollView, View, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

import COLORS from '../constants/Colors';
import Button from '../components/Button';
import user from '../../assets/user.png';

const UserScreen = ({navigation}) => {

const userPhotoDefined = useSelector(state =>state.user.userPhoto);

return(
<View style= {styles.container}>

<Image  style={styles.image} source={ userPhotoDefined =='' ? user : {uri: userPhotoDefined}}/>

  <Button
  styleButtonType={styles.buttonMenu}
  title="Foto de Perfil"
  styleText={styles.textMenu}
  onPress={() => { 
    navigation.navigate('Foto de Perfil') 
    }}
>
</Button>

<Button
  styleButtonType={styles.buttonSesion}
  title="Cerrar Sesión"
  styleText={styles.textMenu}
  onPress={() => { 
    navigation.navigate('Mi Sesión') 
    }}
>
</Button>
</View>
)
}

export default UserScreen

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
  marginVertical:15,
  minWidth: 180,
  backgroundColor:COLORS.primary,
},
buttonSesion:{
  padding:10,
  margin: 10,
  marginVertical:15,
  minWidth: 180,
  backgroundColor:COLORS.alerta,
},
textMenu:{
  color: '#FFFFFF',
},
image: {
  width: 150,
  height: 150,
  resizeMode:'cover',
  borderRadius:500,
  marginVertical: 20,
},
})