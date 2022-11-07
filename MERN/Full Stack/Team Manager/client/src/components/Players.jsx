import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const Players = (props) => {
    const { players, onDeleteProp } = props;

    const handleDelete = (playerID) => {
        onDeleteProp(playerID);
    }

    return (
        <div>
            <h2>
                <Link to={'/players/list'}>List</Link> | <Link to={'/players/add'}>Add Player</Link>
            </h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                                <td>
                                    <DeleteButton playerID={player._id} playerName={player.name} successCallback={handleDelete} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Players;