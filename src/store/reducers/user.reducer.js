import {SET_USERID} from '../actions/user.action';
import {SET_USERPHOTO} from '../actions/user.action';
import {ADD_FAVORITEMEDITATION} from '../actions/user.action';
import {DELETE_FAVORITEMEDITATION} from '../actions/user.action';

const initialState = {
    userProfileID: 0,
    userPhoto: '',
    userName: null,
    userEmail: null,
    userFavoritesMeditations: [],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERID:
            return {
                ...state,
                userProfileID: action.userID,
            }

        case SET_USERPHOTO:
            return {
                ...state,
                userPhoto: action.userPhoto,
            }
        
        case ADD_FAVORITEMEDITATION:
                return {
                    ...state,
                    userFavoritesMeditations: [...state.userFavoritesMeditations, action.favoriteMeditation]
                }

        case DELETE_FAVORITEMEDITATION:
        return {
            ...state,
            userFavoritesMeditations: state.userFavoritesMeditations.filter(item => item.id !== action.favoriteMeditationToDelete.id)
        }

        default:
            return state;
    }
}

export default userReducer;