import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Audio } from 'expo-av';

import Button from '../components/Button';
import COLORS from '../constants/Colors';
import { setMeditacion } from '../store/actions/alarm.action';




const DespertadorMeditacionesDetailScreen = ({ route, navigation }) => {

  const dispatch = useDispatch();
  const [sound, setSound] = React.useState();
  const [playing, setPlaying] = React.useState(false);
  const [elegida, setElegida] = React.useState(false);
  const meditacion = useSelector(state => state.meditaciones.selected)
  const meditacionElegida = useSelector(state => state.alarm.meditation)


  async function playSong() {
    console.log('Loading Sound');
    console.log(meditacion.audio);
    let sonido = '../../assets/audio/' + meditacion.audio;
    console.log(sonido);
    // const { sound } = await Audio.Sound.createAsync(require(sonido)
    const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/meditacion1.mp3')

    );
    setSound(sound);

    console.log('Playing Sound');
    setPlaying(!playing);
    await sound.playAsync();
  }

  const stopSong = () => {
    sound.unloadAsync();
    setPlaying(!playing);
  }

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);


  useEffect(() => {
    navigation.setOptions({
      title: meditacion.name
    })
    if (meditacionElegida != null && meditacion.name == meditacionElegida.name) {
      setElegida(true)
    }
  }, [])

  const addMeditationToAlarm = () => {
    dispatch(setMeditacion(meditacion));
    setElegida(true)
  }


  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{meditacion.name}</Text>
      <Text>{meditacion.duration}</Text>
      <Text>{meditacion.description}</Text>
      <Button
        styleButtonType={styles.buttonDetail}
        title={playing ? "Pausar" : "Escuchar"}
        styleText={styles.buttonDetailText}
        onPress={playing ? stopSong : playSong}
      >
      </Button>
      <Button
        styleButtonType={styles.buttonDetail}
        title={elegida ? "Elegida" : "Seleccionar"}
        styleText={styles.buttonDetailText}
        onPress={addMeditationToAlarm}
      >
      </Button>
    </View>
  )
}

export default DespertadorMeditacionesDetailScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
  },
  buttonDetail: {
    padding: 10,
    margin: 12,
    //marginTop:2,
    minWidth: 180,
    backgroundColor: COLORS.primary,
  },
  buttonDetailText: {
    color: '#FFFFFF',
    fontSize: 17,
  }
})