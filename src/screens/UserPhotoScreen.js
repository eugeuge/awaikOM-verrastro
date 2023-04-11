import { StyleSheet, Text, ScrollView, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';

import COLORS from '../constants/Colors';
import Button from '../components/Button';
import ImageSelector from '../components/ImageSelector';
import { setUserPhoto } from '../store/actions/user.action';

const User = () => {

  const dispatch = useDispatch();
  const [imageValue, setImageValue] = React.useState('');

  const setProfilePhoto = (uri) => {
    dispatch(setUserPhoto(uri))
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Elegí tu foto de Perfil</Text>
      <ImageSelector onImage={image => setImageValue(image)} />
      <Button
        styleButtonType={styles.buttonPhoto}
        title="Guardar"
        styleText={styles.buttonPhotoText}
        onPress={setProfilePhoto(imageValue)}
      />
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    marginBottom: 12,
    textAlign: 'center',
    color: COLORS.text,
  },
  buttonPhoto: {
    padding: 10,
    margin: 5,
    minWidth: 180,
    backgroundColor: COLORS.primary,
  },
  buttonPhotoText: {
    color: '#FFFFFF',
    fontSize: 17,
  },
})