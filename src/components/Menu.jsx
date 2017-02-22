import React from 'react';
import {connect} from 'react-redux';
import {Menu, Dropdown, Container, Button} from 'semantic-ui-react';
import {Row, Col, Visible} from 'react-grid-system';
import {IndexLink, Link} from 'react-router'

const AppMenu = (props) => {
    return (
        <Container>
            <DesktopMenu {...props}/>
        </Container>
    );
};


const DesktopMenu = ({size, ...props}) => {
    return (
        <div>
            <Menu size={size || "small"}>
                <Menu.Item header>Танчики</Menu.Item>
            </Menu>
            {props.children}
        </div>

    );
}


export default connect(state => {
    return {
        user: state.userState.user
    };
})(AppMenu)
