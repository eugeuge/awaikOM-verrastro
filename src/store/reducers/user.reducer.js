import {SET_USERID} from '../actions/user.action';
import {SET_USERPHOTO} from '../actions/user.action';

const initialState = {
    userProfileID: 0,
    userPhoto: '',
    userName: null,
    userEmail: null,
    userSelectedMeditations: [],
    userAlarms: [],
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

        default:
            return state;
    }
}

export default userReducer;