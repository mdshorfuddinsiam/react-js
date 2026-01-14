import { useState } from "react";

export default function Count(){

    const [result, setResult] = useState(0);

    const handleAdd = () =>{
        setResult(result + 1);
    }
    const handleSub = () =>{
        setResult(result - 1);
    }
    const handleReset = () =>{
        setResult(0);
    }

    return (
        <div>
            <h3>Count: {result}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSub}>Sub</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}