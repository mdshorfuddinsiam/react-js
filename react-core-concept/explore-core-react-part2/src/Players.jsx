import { useEffect, useState } from "react"

export default function Players(){

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);

    // console.log(players);

    return (
        <div className="custom-card">
            <h2>Players: {players.length}</h2>
            <ol>
                {
                    players.map(player => <li>{player.name}</li>)
                }
            </ol>
        </div>
    )
}