import { useState } from "react";

export default function Toggle(){

    const [text, setText] = useState(0);

    const handleShow = () =>{
        setText(1);
    }
    const handleHide = () =>{
        setText(0);
    }
    

    return (
        <div className="custom-card">
            {
                text === 1 && <h3 style={{marginTop:"20px"}}>Hello, React Learner!</h3>
            }
            <button onClick={handleShow}>Show</button>
            <button onClick={handleHide}>Hide</button>
        </div>
    )
}