import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import ThemeReducer from './reducers/theme.reducer';
import MeditacionReducer from './reducers/meditacion.reducer';
import AuthReducer from './reducers/auth.reducer';

const RootReducer = combineReducers({
    themes: ThemeReducer,
    meditaciones: MeditacionReducer,
    auth: AuthReducer
}) 

export default createStore(RootReducer, applyMiddleware(thunk))