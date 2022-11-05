import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Form from '../components/Form';

const Edit = (props) => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const data = await axios.get(`http://localhost:8000/api/authors/${id}`).catch(err => console.log('error getting product'));
            setAuthor(data.data.author);
            setLoaded(true);
        })()
    },[]);

    const onUpdateHandler = (edittedAuthor) => {
        (async () => {
            await axios.put(`http://localhost:8000/api/authors/${author._id}`, edittedAuthor)
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
        })()
    }

    return (
        <div>
            <Link to={"/"}>Home</Link>
            <h1>Update an Author</h1>
            {loaded && (
                <Form
                    onSubmitProp={onUpdateHandler}
                    initialState={{ name: author.name }}
                    errorsArr={errors}
                />
            )}
        </div>
    )
}

export default Edit