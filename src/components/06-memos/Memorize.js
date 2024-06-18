import React, { useState } from 'react'
import '../02-useEffect/effects.css';
import { useCounter } from '../../hooks/useCounter';
import Small from './Small';

const Memorize = () => {

    const { counter, incrementOne } = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize</h1>
            <h2>Counter: <Small value={counter}/> </h2>
            <hr />

            <button 
                onClick={ incrementOne } 
                className='btn btn-primary'>
                + 1
            </button>
            
            <button 
                onClick={ () => {
                    setShow(!show);
                }} 
                className='btn btn-primary ms-3'>
                show / hide { JSON.stringify(show) }
            </button>

        </div>
    )
}

export default Memorize
