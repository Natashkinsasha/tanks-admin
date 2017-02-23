import React from 'react';
import {connect} from 'react-redux';
import Rooms from './Rooms.jsx';


const Home = () => {
    return (
        <div>
            <Rooms/>
        </div>
    );
};

export default connect()(Home);