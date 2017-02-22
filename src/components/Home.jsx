import React from 'react';
import {connect} from 'react-redux';
import {Segment, Image} from 'semantic-ui-react'


const Home = () => {
    return (
        <div>
            <Segment>
                <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
        </div>
    );
};

export default connect()(Home);