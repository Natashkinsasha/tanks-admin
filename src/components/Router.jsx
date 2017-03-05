import React from 'react';
import Home from './Home.jsx';
import NotFound from './NotFound.jsx';
import {Router, IndexRedirect, Route, browserHistory, IndexRoute} from 'react-router';
import store from '../reducers/store';
import {connect} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import Menu from './Menu.jsx';
import LogIn from './LogIn.jsx';
import Rooms from './Rooms.jsx';
import Players from './Players.jsx';
import 'semantic-ui-css/semantic.css'

const history = syncHistoryWithStore(browserHistory, store);


const AppRouter = ({user}) => {

    return (
        <Router history={history}>
            <Route path="/" component={Menu}>
                <IndexRoute component={Home}/>
                <Route path="rooms" component={Rooms}/>
                <Route path="room/:id" component={Rooms}/>
                <Route path="players" component={Players}/>
                <Route path="player/:id" component={Players}/>
            </Route>
            <Route path="/login" components={LogIn}/>
            <Route path="*" component={NotFound}/>
        </Router>
    )
};



export default connect(state => {
    return {
        user: state.userState.user
    };
})(AppRouter)
