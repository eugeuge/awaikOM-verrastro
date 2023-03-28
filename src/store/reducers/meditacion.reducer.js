import { MEDITACIONES } from '../../data/meditaciones'
import {SELECT_MEDITACION, FILTER_MEDITACION} from '../actions/meditacion.action'

const initialState = {
    meditaciones: MEDITACIONES,
    filteredMeditaciones: [],
    selected:null,
}

const MeditacionReducer = ( state = initialState, action) => {
    switch(action.type){
        case SELECT_MEDITACION:
            return{
                ...state,
                selected: state.meditaciones.find(meditacion=> meditacion.id === action.meditacionID)
                
            }
        
        case FILTER_MEDITACION:
            return{
            ...state,
            filteredMeditaciones: state.meditaciones.filter(meditacion=>meditacion.theme===action.themeID)
            }

        default:
            return state;
    }
}


export default MeditacionReducer;