import React, { useState } from 'react'

const HookApp = () => {

    const [ state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    });

    const {counter1, counter2 } = state;

    const addCounter = () => {
        setState( { ...state , counter1: counter1 +1 } );  
    }

    return (
        <div>
        <h1>Counter 1: { counter1 }</h1>
        <h1>Counter 2: { counter2 }</h1>
        <hr />

        <button 
        onClick={addCounter}
        className='btn btn-primary'>
            +1
        </button>
        </div>
    )
}

export default HookApp
