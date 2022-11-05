import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';
import Authors from '../components/Authors';

const Main = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            const data = await axios.get("http://localhost:8000/api/authors").catch(err => console.log('error getting products'));
            setAuthors(data.data.author);
            setLoaded(true);
        })()
    }, [authors]);

    const removeFromDom = (authorID) => {
        setAuthors(authors.filter(author => author._id != authorID))
    }

    return (
        <div>
            <h1>Authors</h1>
            <Link to={'/new'}>Add an Author</Link>
            {loaded && <Authors authors={authors} onDeleteProp={removeFromDom}/>}
        </div>
    )
}

export default Main;