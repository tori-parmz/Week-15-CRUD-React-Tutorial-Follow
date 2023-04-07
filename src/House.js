import React from 'react';
import NewRoomForm from './NewRoomForm';

export default class House extends React.PureComponent {
    render() {
        const rooms = this.props.data.rooms
            ? this.props.data.rooms.map((rooms, index) =>
                <li key={index}>
                    {rooms.name} Area: {rooms.area}
                    <button onClick={e =>
                    this.props.deleteRoom(e, this.props.data, room)
                }>Delete</button>
                </li>)
                : null;
                return (
                    <div>
                        <h1>{this.props.data.name}</h1>
                        <ul>
                            {rooms}
                        </ul>
                        <NewRoomForm
                            addNewRoom={this.props.addNewroom} data={this.props.data} />

                    </div>
                );
    }
}