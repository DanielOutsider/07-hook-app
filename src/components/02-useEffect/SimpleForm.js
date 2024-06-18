import React, { useEffect, useState } from 'react'
import Message from './Message';
import './effects.css';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: ''
    })

    // desestructuracion de formState
    const { name, email, password } = formState;

    // se puede escuchar funciones y objetos con useEffect
    useEffect( () => {
        console.log('hey solo se ejecuta la primera vez!');
    }, [] );
    
    useEffect( () => {
        console.log('cambio de form state');
    }, [formState] );

    useEffect( () => {
        console.log('email cambio');
    }, [email] );

    // asigna los cambios al objeto
    const handleInputChange = ({ target }) => {
        console.log(target.name);
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="input-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="input-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmai.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

            </div>

            { (name === "123") && <Message /> }

        </>
    )
}

export default SimpleForm
