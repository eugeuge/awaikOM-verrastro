import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


import COLORS from '../constants/Colors'
import Button from '../components/Button';
import { signIn } from '../store/actions/auth.action';


const RegisterScreen = ({navigation}) => {

    const dispatch = useDispatch();
    //const errorEnRegistro = useSelector(state => state.auth.errorEnRegistro);
    const [email, setEmail] = React.useState('');
    const [contraseña, setContraseña] = React.useState('');
   
    
    const onHandleRegister = () => {
        dispatch(signIn(email,contraseña))
    }

    const iniciarRegistro = () => {
        navigation.navigate('Register')
    }

  return (
<KeyboardAvoidingView style={styles.screen} behavior="padding">
    <View style={styles.container}>
        <Text style={styles.title}>LOG IN</Text>
        <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.textInput}
            autoCapitalize="none"
            keyboardType='email-adress'
            onChangeText={setEmail}
            />
            <Text style={styles.label}>Contraseña</Text>
            <TextInput style={styles.textInput}
            onChangeText={setContraseña}
            secureTextEntry
            />
        </View>
        <View style={styles.prompt}>
            <Button
              styleButtonType={styles.buttonLogin}
              title="Ingresar"
              styleText={styles.buttonLoginText}
              onPress={onHandleRegister}
      >
      </Button>
      <Text style={styles.promptMessage}>¿Aún no creaste tu cuenta?</Text>
      <TouchableOpacity onPress = {iniciarRegistro}>
      <Text style={styles.promptButton}>Crear cuenta</Text>
      </TouchableOpacity>
        </View>

    </View>

</KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontFamily: 'open-sans-bold',
        marginBottom: 12,
        textAlign: 'center',
        color: COLORS.text,
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 25,
        margin: 12,
        marginTop:0,
        borderColor: COLORS.grey,
        borderWidth: 0.5,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    form: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: 7,
    },
    label: {
        fontSize: 16,
        fontFamily: 'open-sans-bold',
        color: COLORS.text,
    },
    textInput: {
        width: '100%',
        height: 40,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
    },
    buttonLogin:{
        padding:10,
        margin: 12,
        //marginTop:2,
        minWidth: 180,
        backgroundColor:COLORS.primary,
      },
    buttonLoginText:{
        color: '#FFFFFF',
        fontSize: 17,
      },
    prompt: {
        alignItems: 'center',
    },
    promptMessage: {
        fontSize: 16,
        marginTop:10,
        fontFamily: 'open-sans',
        color: COLORS.text,
    },
    promptButton: {
        fontSize: 16,
        marginTop:5,
        fontFamily: 'open-sans-bold',
        color: COLORS.primary
    },
    button: {
        backgroundColor: COLORS.primary,
        marginVertical: 20,
    }
})