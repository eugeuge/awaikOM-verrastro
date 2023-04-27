import { SET_MEDITACION } from '../actions/alarm.action';
import { SET_ALARM } from '../actions/alarm.action';
import { RESET_ALARM } from '../actions/alarm.action';

const initialState = {
    dateTime: null,
    meditation: null,
    isSet: false,
}

const alarmReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MEDITACION:
            return {
                ...state,
                meditation: action.alarmMeditacion,
            }
        case SET_ALARM:
            return {
                ...state,
                dateTime: action.alarmDateTime,
                isSet: true,
            }
        case RESET_ALARM:
            return {
                ...state,
                dateTime: null,
                meditation: null,
                isSet: false,
            }

        default:
            return state;
    }
}

export default alarmReducer;