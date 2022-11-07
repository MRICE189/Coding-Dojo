import React, {useState, useEffect} from 'react';
import Players from '../components/Players';
import axios from 'axios';

const Main = () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        (async () => {
            const data = await axios.get("http://localhost:8000/api/players").catch(err => console.log('error getting players'));
            setPlayers(data.data.player);
            setLoaded(true);
        })()
    }, [reload]);

    const removeFromDom = (playerID) => {
        setPlayers(players.filter(player => player._id !== playerID))
        setReload(!reload);
    }

    return (
        <div>
            {loaded && <Players players={players} onDeleteProp={removeFromDom} />}
        </div>
    )
}
export default Main;