import React, {useEffect, useState} from 'react'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(res => res.json())
        .then(res => setPokemon(res.results))
    }, []);

    return !pokemon ? <p>Loading...</p> : (
        <div>
            {console.log(pokemon)}
            {pokemon.map((pokemon, i) => {
                return (
                    <div key={i}><p>{pokemon.name}</p></div>
                )
            })}
        </div>
    );
}

export default Pokemon