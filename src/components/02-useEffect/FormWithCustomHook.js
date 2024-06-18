import React, { useEffect, useState } from 'react'
import './effects.css';
import useForm from '../../hooks/useForm';

const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    // desestructuracion de formState
    const { name, email, password } = formValues;

    useEffect(() => {
      console.log('EL EMAIL CAMBIO');

    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('SEND: ', formValues);
    };
    


    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
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

            <button type='submit' className='btn btn-primary'>Guardar</button>

            { (name === "123") && 'g' }

        </form>
    )
}

export default FormWithCustomHook
