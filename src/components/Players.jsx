import React from 'react';
import {connect} from 'react-redux';
;
import {Table, Checkbox, Button, Dimmer, Loader, Segment, Modal, Form} from 'semantic-ui-react';
import {
    postPlayerSuccess,
    postPlayerUnsuccess,
    putPlayerSuccess,
    putPlayerUnsuccess,
    getPlayersSuccess,
    getPlayersUnsuccess,
    deletePlayerSuccess,
    deletePlayerUnsuccess,
    deletePlayersSuccess,
    deletePlayersUnsuccess
} from '../actions/players'

import {
    postPlayer,
    putPlayer,
    deletePlayer,
    deletePlayers,
    getPlayers
} from '../api/players'

class Players extends React.Component {


    constructor(props){
        super(props);
        this.state={
            isActivePlayersTable:false
        }
    }

    addPlayer = (player) =>{
        this.setState({isActivePlayersTable:false});
        this.props.postPlayer(player).then(()=>{
            this.setState({isActivePlayersTable:true});
        });
    }

    deletePlayers = (ids) =>{
        this.setState({isActivePlayersTable:false});
        this.props.deletePlayers(ids).then(()=>{
            this.setState({isActivePlayersTable:true});
        });
    }

    render() {
        return (
            <Segment>
                <Dimmer active={this.state.isActivePlayersTable} inverted>
                    <Loader />
                </Dimmer>
                <PlayersTable players={this.props.players}/>
            </Segment>
        );
    }
}


const PlayersTable = ({players}) => {
    return (
        <Table size="small" celled>
            <PlayersTableHeader/>
            <PlayersTableBody players={players}/>
            <PlayersTableFooter/>
        </Table>
    )
}


const PlayersTableHeader = () => {
    return (
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell><Checkbox/></Table.HeaderCell>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Login</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    );
}


const PlayersTableBody = ({players}) => {
    return (
        <Table.Body>
            {players.map((player) => {
                return (
                    <Table.Row>
                        <Table.Cell><Checkbox/></Table.Cell>
                        <Table.Cell>{player.id}</Table.Cell>
                        <Table.Cell>{player.login}</Table.Cell>
                    </Table.Row>
                );
            })}
        </Table.Body>
    );
}

const PlayersTableFooter = () => {
    return (
        <Table.Footer>
            <Table.Row>
                <Table.HeaderCell colSpan='4'>
                    <CreatePlayerModal/>
                    <Button size='small' negative>Delete players</Button>
                </Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
    );
}

class CreatePlayerModal extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Modal size="small" trigger={<Button size='small' positive>Add player</Button>} closeIcon='close' ref={(modal) =>{
                this.modal=modal;
            }}>
                <Modal.Header>Create player</Modal.Header>
                <Modal.Content>
                    <Form>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative>Cancel</Button>
                    <Button positive>Create</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default connect(state => (
    {
        players: state.playersState.players
    }
), dispatch => (
    {
        postPlayer: (player) => {
            return  postPlayer(player).then((response) => {
                dispatch(postPlayerSuccess(response));
            }, (response) => {
                dispatch(postPlayerUnsuccess(response));
            }).then(() => {
                return getPlayers();
            }).then((response) => {
                dispatch(getPlayersSuccess(response.data, response));

            }, (response) => {
                dispatch(getPlayersUnsuccess(response));
            });
        },
        putPlayer: (player) => {
            return putPlayer.then((response) => {
                dispatch(putPlayerSuccess(response));
            }, (response) => {
                dispatch(putPlayerUnsuccess(response));
            }).then(() => {
                return getPlayers();
            }).then((response) => {
                dispatch(getPlayersSuccess(response.data, response));
            }, (response) => {
                dispatch(getPlayersUnsuccess(response));
            });
        },
        getPlayers: () => {
            return getPlayers.then((response) => {
                dispatch(getPlayersSuccess(response.data, response));
            }, (response) => {
                dispatch(getPlayersUnsuccess(response));
            });
        },
        deletePlayer: (id) => {
            return deletePlayers(id).then((response) => {
                dispatch(deletePlayerSuccess(response));
            }, (response) => {
                dispatch(deletePlayerUnsuccess(response));
            }).then(() => {
                return getPlayers();
            }).then((response) => {
                dispatch(getPlayersSuccess(response.data, response));
            }, (response) => {
                dispatch(getPlayersUnsuccess(response));
            });
        },
        deletePlayers: (ids) => {
            return deletePlayers(ids).then((response) => {
                dispatch(deletePlayersSuccess(response));
            }, (response) => {
                dispatch(deletePlayersUnsuccess(response));
            }).then(() => {
                return getPlayers();
            }).then((response) => {
                dispatch(getPlayersSuccess(response.data, response));
            }, (response) => {
                dispatch(getPlayersUnsuccess(response));
            });
        }
    }
))(Players);