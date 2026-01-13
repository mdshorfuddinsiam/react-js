import { useState } from "react"

export default function Counter(){

    // ---------- Close Concept (state, hook) ---------
    // function useState(initialValue){
    //     const state = initialValue;
    //     function setState(newValue){
    //         state = newValue;
    //     }
    //     return [state, setState];
    // }
    // ------------------------------------------------

    const [count, setCount] = useState(0);

    const handleClickAdd = () => {
        // setCount(count + 1);
        const newCount = count + 1;
        setCount(newCount);
    }

    const counterStyle = {
        border: "2px solid yellow",
        width: "960px"
    }

    return (
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleClickAdd}>Add Button</button>
        </div>
    )

}