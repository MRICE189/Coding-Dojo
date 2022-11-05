import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';


const Authors = (props) => {
    const {authors, onDeleteProp} = props;

    const handleDelete = (authorID) => {
        onDeleteProp(authorID);
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.sort((a,b) => a.name.localeCompare(b.name)).map((author, idx) => {
                        return (
                            <tr key={idx}>
                            <td>{author.name}</td>
                            <td>
                                <button>
                                    <Link to={`/edit/${author._id}`}>Update</Link>
                                </button>
                                <DeleteButton authorID={author._id} successCallback={handleDelete} />
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Authors