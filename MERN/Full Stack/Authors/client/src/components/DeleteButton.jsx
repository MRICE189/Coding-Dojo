import React from 'react'
import axios from 'axios';
    
export default (props) => {
    
    const { authorID, successCallback } = props;
    
    const deleteAuthor = (e) => {
        axios.delete(`http://localhost:8000/api/authors/${authorID}`)
        .then(res=>{
            successCallback();
        })
    }
    
    return (
        <button onClick={deleteAuthor}>
            Delete
        </button>
    )
}

