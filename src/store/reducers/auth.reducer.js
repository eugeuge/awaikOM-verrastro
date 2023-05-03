import { SIGN_UP, SIGN_UP_FAIL } from '../actions/auth.action';
import { SIGN_UP_START } from '../actions/auth.action';
import { SIGN_IN } from '../actions/auth.action';
import { SIGN_OUT } from '../actions/auth.action';

const initialState = {
    token: null,
    userID: null,
    isLoading: false,
    isAuth: false,
    errorEnRegistro: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_START:
            return {
                ...state,
                isLoading: true,
                errorEnRegistro: false,
            }

        case SIGN_UP:
            return {
                ...state,
                token: action.token,
                userID: action.userID,
                isLoading: false,
                errorEnRegistro: false
            }

        case SIGN_UP_FAIL:
            return {
                ...state,
                isLoading: false,
                errorEnRegistro: true
            }

        case SIGN_IN:
            return {
                ...state,
                token: action.token,
                userID: action.userID,
                isLoading: false,
                errorEnRegistro: false,
                isAuth: true
            }

        case SIGN_OUT:
            return {
                ...state,
                isAuth: false,
                errorEnRegistro: false,
            }


        default:
            return state;
    }
}

export default authReducer;