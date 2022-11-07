import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import NavBar from '../components/NavBar';


const New = () => {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const addPlayer = (player) => {
        axios.post('http://localhost:8000/api/players', player)
        .then(res => navigate("/players/list"))
        .catch(err=>{
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        });
    }

    return (
        <div>
            <h2>
                <Link to={'/players/list'}>List</Link> | <Link to={'/players/add'}>Add Player</Link>
            </h2>
            <Form onSubmitProp={addPlayer} initialState={{name: "", position: "", game1: "undecided", game2: "undecided", game3: "undecided"}} errorsArr={errors} />
        </div>
    )
}

export default New;