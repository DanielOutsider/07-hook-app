import React from 'react'
import '../02-useEffect/effects.css';
import useFetch from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

const MultipleCustomHooks = () => {

    const { counter, incrementOne } = useCounter(1);

    const { loading, error, data } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    
    const { author, quote } = !!data && data[0];

    console.log(data);
    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading
                ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className='blockquote text-end'>
                            <p className='mb-2'> { quote } </p>
                            <footer className='blockquote-footer'> { author } </footer>
                        </blockquote>
                    )
            }

            <button 
                onClick={ incrementOne } 
                className='btn btn-primary'>
                Siguiente quote
            </button>
            

            
        </div>
    )
}

export default MultipleCustomHooks
