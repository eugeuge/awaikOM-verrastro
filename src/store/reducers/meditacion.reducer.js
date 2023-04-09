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
            //Probar si no es más declarativo poner una constante con el resultado del find o filter y después asignarlo. Como en el after 12.
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