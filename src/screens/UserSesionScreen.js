import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';

import COLORS from '../constants/Colors';
import Button from '../components/Button';
import { signOut } from '../store/actions/auth.action';

const UserSesionScreen = () => {

    const dispatch = useDispatch();
    
    const cerrarSesion = () => {
        dispatch(signOut())
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>¿Estás seguro que querés cerrar tu sesión?</Text>
            <Button
                styleButtonType={styles.buttonSesion}
                title="Cerrar Sesion"
                styleText={styles.textMenu}
                onPress={cerrarSesion}
            />
        </View>
    )
}

export default UserSesionScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontFamily: 'open-sans-bold',
        maxWidth: 250,
        marginBottom: 12,
        textAlign: 'center',
        color: COLORS.text,
    },
    buttonSesion: {
        padding: 10,
        margin: 10,
        marginVertical: 15,
        minWidth: 180,
        backgroundColor: COLORS.alerta,
    },
    textMenu: {
        color: '#FFFFFF',
    },
})