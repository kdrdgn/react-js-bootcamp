
import React, { useEffect, useState } from "react";

const CounterUseEffect = () => {

    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        console.log('side effect');
        document.title = `Count: ${count}`;
    },[count]);

    return (
    <div>
        <label>Count {count}</label>
        <button onClick={( ) => setCount(count + 1)}>+</button>
        <button onClick={( ) => setCount(count - 1)}>-</button>
        <hr/>
        <button onClick={( ) => setToggle(!toggle)}>{toggle ? 'ON' : 'OFF'}</button>
    </div>);
}

export default CounterUseEffect;