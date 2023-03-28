import {createStore, combineReducers} from 'redux';

import ThemeReducer from './reducers/theme.reducer';
import MeditacionReducer from './reducers/meditacion.reducer';

const RootReducer = combineReducers({
    themes: ThemeReducer,
    meditaciones: MeditacionReducer,
}) 

export default createStore(RootReducer)