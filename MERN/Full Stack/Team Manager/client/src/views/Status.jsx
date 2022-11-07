import React, {useState, useEffect} from 'react';
import Players from '../components/Players';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Status = () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const {number} = useParams();
    let game = `game${number}`

    useEffect(() => {
        (async () => {
            const data = await axios.get("http://localhost:8000/api/players").catch(err => console.log('error getting players'));
            setPlayers(data.data.player);
            setLoaded(true);
        })()
    }, [loaded]);

    const handleClick = (player, game, status) => {
            axios.put(`http://localhost:8000/api/players/${player}`, {[game]: status})
            .then(setLoaded(false))
            .catch(err => console.log('error on click'))
    }

    return (
        <div>
            <h2>Player Status - Game {number}</h2>
            <div className='d-flex justify-content-center gap-2'>
                <Link to={"/status/game/1"}>Game 1</Link> | <Link to={"/status/game/2"}>Game 2</Link> | <Link to={"/status/game/3"}>Game 3</Link>
            </div>
            <table className='m-5'>
                <thead>
                    <tr>
                        <td>Player</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {loaded && players.map((player, idx) => {
                    if (game == "game1") {
                        return (
                            <tr key={idx}>
                                <td>{player.name}</td>
                                    {player.game1 == "playing" ? <td className='btn btn-success'>Playing</td> : <td><button onClick={(e) => handleClick(player._id, game, "playing")} className='btn border btn-light'>Playing</button></td>}
                                    {player.game1 == "notPlaying" ? <td className='btn btn-danger'>Not Playing</td> : <td><button onClick={(e) => handleClick(player._id, game, "notPlaying")} className='btn border btn-light'>Not Playing</button></td>}
                                    {player.game1 == "undecided" ? <td className='btn btn-warning'>Undecided</td> : <td><button onClick={(e) => handleClick(player._id, game, "undecided")} className='btn border btn-light'>Undecided</button></td>}
                            </tr>
                        )
                    }
                    if (game == "game2") {
                        return (
                            <tr key={idx}>
                                <td>{player.name}</td>
                                    {player.game2 == "playing" ? <td className='btn btn-success'>Playing</td> : <td><button onClick={(e) => handleClick(player._id, game, "playing")} className='btn border btn-light'>Playing</button></td>}
                                    {player.game2 == "notPlaying" ? <td className='btn btn-danger'>Not Playing</td> : <td><button onClick={(e) => handleClick(player._id, game, "notPlaying")} className='btn border btn-light'>Not Playing</button></td>}
                                    {player.game2 == "undecided" ? <td className='btn btn-warning'>Undecided</td> : <td><button onClick={(e) => handleClick(player._id, game, "undecided")} className='btn border btn-light'>Undecided</button></td>}
                            </tr>
                        )
                    }
                    if (game == "game3") {
                        return (
                            <tr key={idx}>
                                <td>{player.name}</td>
                                    {player.game3 == "playing" ? <td className='btn btn-success'>Playing</td> : <td><button onClick={(e) => handleClick(player._id, game, "playing")} className='btn border btn-light'>Playing</button></td>}
                                    {player.game3 == "notPlaying" ? <td className='btn btn-danger'>Not Playing</td> : <td><button onClick={(e) => handleClick(player._id, game, "notPlaying")} className='btn border btn-light'>Not Playing</button></td>}
                                    {player.game3 == "undecided" ? <td className='btn btn-warning'>Undecided</td> : <td><button onClick={(e) => handleClick(player._id, game, "undecided")} className='btn border btn-light'>Undecided</button></td>}
                            </tr>
                        )
                    }
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Status;