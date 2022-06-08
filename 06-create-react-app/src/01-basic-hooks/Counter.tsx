import React, { useState } from "react";
import { useParams } from "react-router";


const Counter = () => {
    

    const params = useParams();

    let initialCounter = 0;

    if(params.initialCounter !== undefined){
        initialCounter = parseInt(params.initialCounter);
    }

    const [count, setCount] = useState(initialCounter);

    return (
        <div>
            <label>Count: {count}</label>
            <button onClick={()=> setCount(count + 1)}>+</button>
            <button onClick={()=> setCount(count - 1)}>-</button>
        </div>
    )
}

export default Counter;