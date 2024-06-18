import React, { useLayoutEffect, useRef, useState } from 'react'
import '../02-useEffect/effects.css';
import useFetch from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './layout.css';

const LayoutEffect = () => {

    const { counter, incrementOne } = useCounter(1);

    const { loading, error, data } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    
    const { author, quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBbxSize] = useState({});

    useLayoutEffect( () => {
        console.log(pTag.current.getBoundingClientRect());
        setBbxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    console.log(data);


    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />


                <blockquote className='blockquote text-end'>
                    <p 
                        className='mb-2'
                        ref= { pTag }> 
                        { quote } 
                    </p>
                    <footer className='blockquote-footer'> { author } </footer>
                </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>
            <button 
                onClick={ incrementOne } 
                className='btn btn-primary'>
                Siguiente quote
            </button>
            

            
        </div>
    )
}

export default LayoutEffect
