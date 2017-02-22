import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'
import userReduxe from '../reducers/user';
import usersReduxe from '../reducers/users';
import roomsReduxe from '../reducers/rooms';
import {routerReducer} from 'react-router-redux'

const store = createStore(
    combineReducers({
        routing: routerReducer,
        userState: userReduxe,
        usersState: usersReduxe,
        roomsState: roomsReduxe
    }),
    compose(
        applyMiddleware(reduxThunk),
        applyMiddleware(createLogger())
    )
)

export default store;
