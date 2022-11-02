import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router';
import {Link, useNavigate} from 'react-router-dom';


const People = (props) => {
    const [person, setPerson] = useState([]);
    const {personID} = useParams();
    const [home, setHome] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const data1 = await axios.get(`https://swapi.dev/api/people/${personID}`).catch(err => navigate("/error"));
            const data2 = await axios.get(`${data1.data.homeworld}`);
            setPerson(data1.data);
            setHome({...home, name: data2.data.name, idNum: data1.data.homeworld.substring(30)})
        })()
    }, [personID]);



    return (
        <div>
            <h1>{person.name}</h1>
            <p>Mass: {person.mass}</p>
            <p>Height: {person.height}</p>
            <p>Birth Year: {person.birth_year}</p>
            <p>Home world: <Link to={`/planets/${home.idNum}`}>{home.name}</Link></p>
        </div>
    )
}

export default People