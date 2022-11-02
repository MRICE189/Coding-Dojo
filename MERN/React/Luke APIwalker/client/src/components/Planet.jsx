import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router';
import {useNavigate} from 'react-router-dom';


const Planet = (props) => {
    const [planet, setPlanet] = useState([]);
    const {planetID} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const data1 = await axios.get(`https://swapi.dev/api/planets/${planetID}`).catch(err => navigate("/error"));
            setPlanet(data1.data);
        })()
    }, [planetID]);


    // useEffect(() => {
    //     if (isNaN(+planetID)) {
    //         axios.get(`${planetID}`)
    //         .then(res => {setPlanet(res.data)})
    //         .catch(err => navigate("/error"))
    //     } else {
    //         axios.get(`https://swapi.dev/api/planets/${planetID}`)
    //         .then(res => {setPlanet(res.data)})
    //         .catch(err => navigate("/error"))
    //     }
    // }, [planetID]);

    return (
        <div>
            <h1>{planet.name}</h1>
            <p>Diameter: {planet.diameter}</p>
            <p>Gravity: {planet.gravity}</p>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
        </div>
    )
}

export default Planet