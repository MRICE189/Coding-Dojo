import React from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import { useState } from 'react';

const New = () => {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const createAuthor = (author) => {
        (async () => {
            const authorData = axios.post('http://localhost:8000/api/authors', author)
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
        })();
    }

    return (
        <div>
            <Link to={"/"}>Home</Link>
            <Form onSubmitProp={createAuthor} initialState={{name: ""}} errorsArr={errors} />
        </div>
    )
}

export default New;