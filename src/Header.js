import React, { useState } from 'react';

export default function Header(){

    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter(counter + 1);
        console.log(counter);
    }

    return (
        <div>
            <h1>Contador: {counter} </h1>
            <button onClick={increment}>Incrementar</button>
        </div>
    );
}