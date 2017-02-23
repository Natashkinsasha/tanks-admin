import React from 'react';
import {connect} from 'react-redux';
;
import {Table, Checkbox, Button, Dimmer, Loader, Segment, Modal, Form} from 'semantic-ui-react';
import {
    postRoomSuccess,
    postRoomUnsuccess,
    putRoomSuccess,
    putRoomUnsuccess,
    getRoomsSuccess,
    getRoomsUnsuccess,
    deleteRoomSuccess,
    deleteRoomUnsuccess,
    deleteRoomsSuccess,
    deleteRoomsUnsuccess
} from '../actions/rooms'

import {
    postRoom,
    putRoom,
    deleteRoom,
    deleteRooms,
    getRooms
} from '../api/rooms'

class Rooms extends React.Component {


    constructor(props){
        super(props);
        this.state={
            isActiveRoomsTable:false
        }
    }

    addRoom = (room) =>{
        this.setState({isActiveRoomsTable:false});
        this.props.postRoom(room).then(()=>{
            this.setState({isActiveRoomsTable:true});
        });
    }

    deleteRooms = (ids) =>{
        this.setState({isActiveRoomsTable:false});
        this.props.deleteRooms(ids).then(()=>{
            this.setState({isActiveRoomsTable:true});
        });
    }

    render() {
        return (
            <Segment>
                <Dimmer active={this.state.isActiveRoomsTable} inverted>
                    <Loader />
                </Dimmer>
                <RoomsTable rooms={this.props.rooms}/>
            </Segment>
        );
    }
}


const RoomsTable = ({rooms}) => {
    return (
        <Table size="small" celled>
            <RoomsTableHeader/>
            <RoomsTableBody rooms={rooms}/>
            <RoomsTableFooter/>
        </Table>
    )
}


const RoomsTableHeader = () => {
    return (
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell><Checkbox/></Table.HeaderCell>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Max number</Table.HeaderCell>
                <Table.HeaderCell>Min number</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    );
}


const RoomsTableBody = ({rooms}) => {
    return (
        <Table.Body>
            {rooms.map((room) => {
                return (
                    <Table.Row>
                        <Table.Cell><Checkbox/></Table.Cell>
                        <Table.Cell>{room.id}</Table.Cell>
                        <Table.Cell>{room.maxNumber}</Table.Cell>
                        <Table.Cell>{room.minNumber}</Table.Cell>
                    </Table.Row>
                );
            })}
        </Table.Body>
    );
}

const RoomsTableFooter = () => {
    return (
        <Table.Footer>
            <Table.Row>
                <Table.HeaderCell colSpan='4'>
                    <CreateRoomModal/>
                    <Button size='small' negative>Delete rooms</Button>
                </Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
    );
}

class CreateRoomModal extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Modal size="small" trigger={<Button size='small' positive>Add room</Button>} closeIcon='close' ref={(modal) =>{
                this.modal=modal;
            }}>
                <Modal.Header>Create room</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Select label='Max number of player' options={[{ key: '2', text: '2', value: '2' },{ key: '4', text: '4', value: '4' }]}/>
                        <Form.Select label='Min number of player' options={[{ key: '2', text: '2', value: '2' },{ key: '4', text: '4', value: '4' }]}/>
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
        rooms: state.roomsState.rooms
    }
), dispatch => (
    {
        postRoom: (room) => {
            return  postRoom(room).then((response) => {
                dispatch(postRoomSuccess(response));
            }, (response) => {
                dispatch(postRoomUnsuccess(response));
            }).then(() => {
                return getRooms();
            }).then((response) => {
                dispatch(getRoomsSuccess(response.data, response));
            }, (response) => {
                dispatch(getRoomsUnsuccess(response));
            });
        },
        putRoom: (room) => {
            return putRoom.then((response) => {
                dispatch(putRoomSuccess(response));
            }, (response) => {
                dispatch(putRoomUnsuccess(response));
            }).then(() => {
                return getRooms();
            }).then((response) => {
                dispatch(getRoomsSuccess(response.data, response));
            }, (response) => {
                dispatch(getRoomsUnsuccess(response));
            });
        },
        getRooms: () => {
            return getRooms.then((response) => {
                dispatch(getRoomsSuccess(response.data, response));
            }, (response) => {
                dispatch(getRoomsUnsuccess(response));
            });
        },
        deleteRoom: (id) => {
            return deleteRooms(id).then((response) => {
                dispatch(deleteRoomSuccess(response));
            }, (response) => {
                dispatch(deleteRoomUnsuccess(response));
            }).then(() => {
                return getRooms();
            }).then((response) => {
                dispatch(getRoomsSuccess(response.data, response));
            }, (response) => {
                dispatch(getRoomsUnsuccess(response));
            });
        },
        deleteRooms: (ids) => {
            return deleteRooms(ids).then((response) => {
                dispatch(deleteRoomsSuccess(response));
            }, (response) => {
                dispatch(deleteRoomsUnsuccess(response));
            }).then(() => {
                return getRooms();
            }).then((response) => {
                dispatch(getRoomsSuccess(response.data, response));
            }, (response) => {
                dispatch(getRoomsUnsuccess(response));
            });
        }
    }
))(Rooms);