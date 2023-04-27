import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Audio } from 'expo-av';

import Button from '../components/Button';
import COLORS from '../constants/Colors';
import { addFavoriteMeditation, deleteFavoriteMeditation } from '../store/actions/user.action';


const DetailMeditacionScreen = ({ route, navigation}) => {
  
  const dispatch = useDispatch();
  const [sound, setSound] = React.useState();
  const [playing, setPlaying] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false);
  const meditacion = useSelector(state => state.meditaciones.selected)
  const favoritesMeditations = useSelector(state => state.user.userFavoritesMeditations)



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
  
    React.useEffect(() => {
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
    
     const incluido = favoritesMeditations.find(item => item.id == meditacion.id);
     if(incluido){
     setFavorite(true)
     }
  },[])

  const addMeditationToFavorite = () => {
    dispatch(addFavoriteMeditation(meditacion));
    setFavorite(true);
  }

  const deleteMeditationFromFavorite = () => {
    dispatch(deleteFavoriteMeditation(meditacion));
    setFavorite(false);
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{meditacion.name}</Text>
      <Text>{meditacion.duration}</Text>
      <Text>{meditacion.description}</Text>
      <Button
        styleButtonType={styles.buttonDetail}
        title= {playing ? "Pausar" : "Escuchar"}
        styleText={styles.buttonDetailText}
        onPress={playing ? stopSong : playSong} 
      >
      </Button>
      <Button
        styleButtonType={styles.buttonDetail}
        title= {favorite ? "Eliminar Favorito" : "Agregar Favorito"}
        styleText={styles.buttonDetailText}
        onPress={favorite ?  deleteMeditationFromFavorite :  addMeditationToFavorite} 
      >
      </Button>
    </View>
  )
}

export default DetailMeditacionScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
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