import { THEMES } from '../../data/themes'
import {SELECT_THEME} from '../actions/theme.action'

const initialState = {
    themes: THEMES,
    selected: null,
}

const ThemeReducer = ( state = initialState, action) => {
    switch(action.type){
        case SELECT_THEME:
         const indexTheme = state.themes.findIndex( theme => theme.id === action.themeID)
            if( indexTheme === -1 ) return state;
            return {...state, selected: state.themes[indexTheme]}
        default:
            return state;
    }
}

export default ThemeReducer;