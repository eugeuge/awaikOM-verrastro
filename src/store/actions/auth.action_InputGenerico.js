import { SIGN_UP_URL } from '../../constants/Database';
import { SIGN_IN_URL } from '../../constants/Database';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_FAIL = 'SIGN_UP_FAIL';
export const SIGN_IN = 'SIGN_IN';


export const signUp = (email, password) => {
    return async dispatch => {
        try {
            dispatch({
                type: SIGN_UP_START,
            })

            const response = await fetch(SIGN_UP_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                })
            });


            if (!response.ok) {
                const errorResData = await response.json();
                const errorId = errorResData.error.message;
                let message = 'Algo salió mal en el registro, verifica los datos ingresados e inténtalo nuevamente';

                if (errorId === 'EMAIL_EXISTS') {
                    message = 'Este email ya fué registrado';
                } else if (errorId === 'TOO_MANY_ATTEMPS_TRY_LATER'){
                    message = 'Has intentado entrar con datos errones demasiadas veces. Dejá pasar unos minutos e intentá nuevamente';
                }
                throw new Error(message);
            }

            const data = await response.json();

            dispatch({
                type: SIGN_UP,
                token: data.idToken,
                userID: data.localId
            })

        } catch (error) {
        }

    }

}

export const signIn = (email, password) => {
    return async dispatch => {
        try {
            const response = await fetch(SIGN_IN_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                })
            });

            const data = await response.json();


            if (data.registered) {
                dispatch({
                    type: SIGN_IN,
                    token: data.idToken,
                    userID: data.localId
                })

            } else {
                throw new Error('Algo salió mal. No pudimos acceder a tu Perfil. Verificá estar ingresando correctamente tu usuario y contraseña');
                // Si quisiera especificar el motivo: data.error.message


            }

        } catch (error) {
            alert(error);
        }

    }

}