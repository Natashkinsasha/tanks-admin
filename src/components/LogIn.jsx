import React from 'react';
import {Checkbox, Form, Input, Select, Segment, Button, Grid, Header, Message} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {login} from '../api/user';
import {
    loginSuccess,
    loginUnsuccess
} from '../actions/user';
import {push} from 'react-router-redux';


class LogIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            formLoading: false
        }
    }

    submit = (user) => {
        this.setState({formLoading: true});
        this.props.login(user).then(() => {
            this.setState({formLoading: false});
        });
    }

    render() {
        return (
            <Grid container verticalAlign='middle' centered>
                <Grid.Row>
                    <Grid.Column mobile={12} tablet={9} computer={6}>
                        <Segment>
                            <Header as='h2' textAlign='center'>
                                Log-in to your account
                            </Header>
                            <Form loading={this.state.formLoading}>
                                <Form.Input icon='user' iconPosition='left' label='Login' value={this.state.login}
                                            onChange={(e) => {
                                                this.setState({login: e.target.value});
                                            }}/>
                                <Form.Input icon='lock' iconPosition='left' label='Password' type='password'
                                            value={this.state.password} onChange={(e) => {
                                    this.setState({password: e.target.value});
                                }}/>
                                <Button fluid positive onClick={(e) => {
                                    e.preventDefault();
                                    this.submit({login: this.props.login, password: this.props.password});
                                }}>Submit</Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default connect(null, (dispatch) => (
    {
        login: (user) => {
            return login(user).then((response) => {
                dispatch((dispatch) => {
                    loginSuccess(response.data, response).then(() => {
                        dispatch(push("/"));
                    })
                });
            }, (response) => {
                dispatch(
                    dispatch(loginUnsuccess(response))
                );
            });
        }
    }
))(LogIn);