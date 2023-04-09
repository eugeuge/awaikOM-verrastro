import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, {useReducer} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import COLORS from '../constants/Colors'
import Button from '../components/Button';
import InputGenerico from '../components/InputGenerico';
import { signUp } from '../store/actions/auth.action';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

export const formReducer = (state, action) => {
    //el if es porque hay un sólo caso
    if (action.type === FORM_INPUT_UPDATE) {
        const inputValues = {
            ...state.inputValues,
            [action.input]: action.value,
        }
        const inputValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid,

        }
        let formIsValid = true;

        for (const key in inputValidities) {
            formIsValid = formIsValid && inputValidities[key];
        }
        return {
            formIsValid,
            inputValues,
            inputValidities,
        }
    }
    return state;
}



const RegisterScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const isAuthLoading = useSelector(state => state.auth.isLoading);

    const [formState, formDispatch] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: '',
        },
        inputValidities: {
            email: false,
            password: false,
        },
        formIsValid: false
    });


    const onHandleRegister = () => {
        
        console.log(formState.formIsValid);
        console.log(formState.inputValues.email);
        console.log(formState.inputValues.password);

        if (formState.formIsValid) {
            dispatch(signUp(formState.inputValues.email, formState.inputValues.password));

            navigation.navigate('RegisterOK')
        } else {
                alert(
                    'Formulario inválido, ingresá un email y usuario válidos'

                );
        }
    };

    const handlerChangeText = React.useCallback((inputIdentifier, inputValue, inuputValidity) => {
        formDispatch({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inuputValidity,
            input: inputIdentifier
        })
    }, [formDispatch]);

    const iniciarSesion = () => {
        navigation.navigate('Login')
    }

    return (
        <KeyboardAvoidingView style={styles.screen} behavior="padding">
            <View style={styles.container}>
                <Text style={styles.title}>REGISTRATE</Text>
                <View style={styles.form}>
                    <InputGenerico
                        initialValue={formState.inputValues.email}
                        initialValid={formState.inputValidities.email}
                        onInputChange={handlerChangeText}
                        id='email'
                        required
                        email
                        minLenght={5}
                        label='Email'
                        errorText='Porfavor, ingrese un email válido'
                        autoCapitalize="none"
                        keyboardType='email-adress'
                    />
                    <InputGenerico
                        initialValue={formState.inputValues.password}
                        initialValid={formState.inputValidities.password}
                        onInputChange={handlerChangeText}
                        id='password'
                        required
                        minLenght={8}
                        label='Password'
                        errorText='Porfavor, ingrese una contraseña válida'
                        autoCapitalize="none"
                        keyboardType='email-adress'
                        secureTextEntry
                    />
                </View>
                <View style={styles.prompt}>
                    <Button
                        styleButtonType={styles.buttonLogin}
                        title={isAuthLoading ? 'Loading...' : "Crear cuenta"}
                        styleText={styles.buttonLoginText}
                        onPress={onHandleRegister}
                    >
                    </Button>
                    <Text style={styles.promptMessage}>¿Ya tenés una cuenta creada?</Text>
                    <TouchableOpacity onPress={iniciarSesion} >
                        <Text style={styles.promptButton}>Iniciar Sesión</Text>
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
        marginTop: 0,
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
    buttonLogin: {
        padding: 10,
        margin: 12,
        minWidth: 180,
        backgroundColor: COLORS.primary,
    },
    buttonLoginText: {
        color: '#FFFFFF',
        fontSize: 17,
    },
    prompt: {
        alignItems: 'center',
    },
    promptMessage: {
        fontSize: 16,
        marginTop: 10,
        fontFamily: 'open-sans',
        color: COLORS.text,
    },
    promptButton: {
        fontSize: 16,
        marginTop: 5,
        fontFamily: 'open-sans-bold',
        color: COLORS.primary
    },
})