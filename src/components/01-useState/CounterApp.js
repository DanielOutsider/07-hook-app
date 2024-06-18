import React, { useState } from 'react';

const CounterApp = ( initialState = 10 ) => {

    const [state, setState] = useState(initialState)

    const increment = () => {
        setState( state + 1 );
    }

    const decrement = () => {
        setState( state + 1 );
    }

    return (
        <div>
        
        </div>
    )
}

export default CounterApp
