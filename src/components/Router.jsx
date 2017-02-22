import React from 'react';
import Home from './Home.jsx';
import NotFound from './NotFound.jsx';
import {Router, IndexRedirect, Route, browserHistory, IndexRoute} from 'react-router';
import store from '../reducers/store';
import {connect} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import Menu from './Menu.jsx';
import 'semantic-ui-css/semantic.css'

const history = syncHistoryWithStore(browserHistory, store);


const AppRouter = ({user}) => {

    return (
        <Router history={history}>
            <Route path="/" component={Menu}>
                <IndexRoute component={Home}/>
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    )
};



export default connect(state => {
    return {
        user: state.userState.user
    };
})(AppRouter)
