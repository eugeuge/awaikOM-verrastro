// El objetivo de esta lógica es entender el uso del reducer sin redux, gestionado de manera local. Gestiona mejor los renders.

import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useReducer, useEffect } from 'react'

import COLORS from '../constants/Colors'

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";

const inputReducer = (state, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                value: action.value,
                isValid: action.isValid
            }
        case INPUT_BLUR:
            return {
                ...state,
                touched: true
            }
        default:
            return state;
    }
}


const InputGenerico = props => {

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue ? props.initialValue : '',
        isValid: props.initialValid,
        touched: false
    });

    const { onInputChange, id } = props; // id se declara, pero no se usa

    useEffect(() => {
        if (inputState.touched) {
            onInputChange(inputState.value, inputState.isValid);
        }
    }, [inputState, onInputChange]);

    const textChangeHandler = text => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = true;
        if (props.required && text.trim().length === 0) {
            isValid = false;
        }
        if (props.email && !emailRegex.test(text.toLowerCase())) {
            isValid = false;
        }
        if (props.min != null && +text < min) {
            isValid = false;
        }
        if (props.max != null && +text > max) {
            isValid = false;
        }
        if (props.minLength != null && text.length < minLength) {
            isValid = false;
        }
        dispatch({
            type: INPUT_CHANGE,
            value: text,
            isValid: isValid
        });
    };

    const lostFocusHandler = () => {
        dispatch({ type: INPUT_BLUR });
    }

    return (
        <View style={styles.formControl}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                {...props}
                style={styles.input}
                value={inputState.value}
                onChangeText={textChangeHandler}
                onBlur={lostFocusHandler}
            />
            {!inputState.isValid && inputState.touched && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{props.errorText}</Text>
                </View>
            )}
        </View>
    )
}

export default InputGenerico

const styles = StyleSheet.create({
    formControl: {
        width: '100%'
    },
    label: {
        fontSize: 16,
        fontFamily: 'open-sans-bold',
        color: COLORS.text,
    },
    input: {
        width: '100%',
        height: 40,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 12,
    },
    errorContainer: {
        marginVertical: 5
    },
    errorText: {
        fontFamily: 'open-sans-bold',
        fontSize: 11,
        color: 'red',

    }
})