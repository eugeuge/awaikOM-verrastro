import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import ThemeReducer from './reducers/theme.reducer';
import MeditacionReducer from './reducers/meditacion.reducer';
import AuthReducer from './reducers/auth.reducer';
import UserReducer from './reducers/user.reducer';

const RootReducer = combineReducers({
    themes: ThemeReducer,
    meditaciones: MeditacionReducer,
    auth: AuthReducer,
    user: UserReducer,
}) 

export default createStore(RootReducer, applyMiddleware(thunk))