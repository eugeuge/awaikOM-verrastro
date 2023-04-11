import { StyleSheet, Text, View, Image, Alert, ScrollView } from 'react-native'
import React from 'react'
import * as ImagePicker from 'expo-image-picker'
//import * as Permissions from 'expo-permissions'


import Button from './Button'
import COLORS from '../constants/Colors'
import logo from '../../assets/logo.png';

const ImageSelector = ({ onImage }) => {

    const [pickedUri, setPickedUri] = React.useState();

    const VerifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()

        if (status !== 'granted') {
            Alert.alert(
                'Permisos insuficientes',
            )

            return false;
        }
        return true;
    }


    const handlerTakeImage = async () => {
        const isCameraOk = await VerifyPermissions();

        if (!isCameraOk) return

        const image = await ImagePicker.launchCameraAsync({
            allowEdditing: true,
            aspect: [16, 9],
            quality: 0.8,
        })

        
        setPickedUri(image.assets[0].uri)
        onImage(image.assets[0].uri)
        console.log(pickedUri)
    }

    return (


        <View style={styles.container}>
            {console.log(pickedUri)}
            <View style={styles.preview}>
                {!pickedUri
                    ? (<Text style={styles.imageText}>No hay imagen seleccionada...</Text>)
                    : (<Image  style={styles.image} source={{uri:pickedUri}}/>)
                }
            </View>
            {/* <Button
                title="Tomar foto"
                color={COLORS.primary}
                onPress={handlerTakeImage}
            /> */}
            <Button
                styleButtonType={styles.buttonPhoto}
                onPress={handlerTakeImage}
                title={!pickedUri ? "Tomar Foto" : "Tomar Otra Foto"}
                styleText={styles.buttonPhotoText}
            />
        </View>
    )
}

export default ImageSelector

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    preview: {
        width: '90%',
        height: 230,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: COLORS.primary,
        borderWith: 1,
    },
    image: {
        width: 300,
        height: 220,
        resizeMode:'cover',
    },
    imageText:{
        justifyContent: 'center',
    },
    buttonPhoto: {
        padding: 10,
        margin: 5,
        minWidth: 180,
        backgroundColor: COLORS.primaryLight,
    },
    buttonPhotoText: {
        color: COLORS.text,
        fontSize: 17,
    },
})