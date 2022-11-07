import React, {useState, useEffect} from 'react';
import Players from '../components/Players';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            const data = await axios.get("http://localhost:8000/api/players").catch(err => console.log('error getting players'));
            setPlayers(data.data.player);
            setLoaded(true);
        })()
    }, [players]);

    const removeFromDom = (playerID) => {
        setPlayers(players.filter(player => player._id != playerID))
    }

    return (
        <div>
            {loaded && <Players players={players} />}
        </div>
    )
}
export default Main;