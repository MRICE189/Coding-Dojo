import React from 'react'
import axios from 'axios';
    
const DeleteButton = (props) => {
    
    const { playerID, playerName, successCallback } = props;
    
    const deletePlayer = (e) => {
        if (window.confirm(`Are you sure you want to delete ${playerName}?`) === true) {
            axios.delete(`http://localhost:8000/api/players/${playerID}`)
            .then(res=>{
                successCallback(playerID);
            })
        }
    }
    
    return (
        <button className='btn btn-danger' onClick={deletePlayer}>
            Delete
        </button>
    )
}

export default DeleteButton;