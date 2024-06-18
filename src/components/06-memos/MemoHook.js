import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import Small from './Small';
import '../02-useEffect/effects.css';

const MemoHook = () => {
    const { counter, incrementOne } = useCounter(5000);
    const [ show, setShow ] = useState(true);

    const procesoPesado = ( iteraciones ) => {

        for( let i = 0; i < iteraciones; i++){
            console.log('ahi vamos ...');
        }

        return `${ iteraciones } iteraciones realizadas`;
    }

    // al utilizar use Memo graba el valor del metodo y no lo vuelve a procesar 
    // o cargar a menos que cambie de valor el counter
    // esto es importante para evitar reproceso y carga de memoria
    const memoProcesoPesado = useMemo( () => procesoPesado( counter ), [ counter ])

    return (
        <div>
            <h1>MemoHook</h1>
            <h2>Counter: <small> { counter } </small> </h2>
            <hr />

            <p> { memoProcesoPesado } </p>

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

export default MemoHook
