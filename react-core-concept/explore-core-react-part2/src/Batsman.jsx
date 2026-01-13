import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0)
    const [sixes, setSixes] = useState(0)

    const handleOne = () => {
        setRuns(runs + 1);
    }
    const handleFour = () => {
        setRuns(runs + 4);
    }
    const handleSix = () => {
        setRuns(runs + 6);
        setSixes(sixes + 1)
    }

    return (
        <div>
            <h3>Player: Bangladeshi Batsman</h3>
            <h1>Score: {runs}</h1>
            <h2>Sixes: {sixes}</h2>
            {
                runs >= 50 && <p>You Scored : 50</p>
            }
            <button onClick={handleOne}>One</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}