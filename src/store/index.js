import {createStore, combineReducers, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
 
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key:'root',
    storage: AsyncStorage
  }

// reducers
import ThemeReducer from './reducers/theme.reducer';
import MeditacionReducer from './reducers/meditacion.reducer';
import AuthReducer from './reducers/auth.reducer';
import UserReducer from './reducers/user.reducer';
import AlarmReducer from './reducers/alarm.reducer';

const rootReducer = combineReducers({
    themes: ThemeReducer,
    meditaciones: MeditacionReducer,
    auth: AuthReducer,
    user: UserReducer,
    alarm: AlarmReducer,
}) 

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const storePersisted = persistStore(store);