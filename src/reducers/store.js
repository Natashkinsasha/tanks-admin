import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'
import userReducer from '../reducers/user';
import playersReducer from './players';
import roomsReducer from '../reducers/rooms';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';


const store = createStore(
    combineReducers({
        routing: routerReducer,
        userState: userReducer,
        playersState: playersReducer,
        roomsState: roomsReducer
    }),
    compose(
        applyMiddleware(routerMiddleware(browserHistory)),
        applyMiddleware(reduxThunk),
        applyMiddleware(createLogger())
    )
)

export default store;
0