import React from 'react'
import useForm from '../../hooks/useForm';

const TodoAdd = ( { handleAddTodo } ) => {

    // estado del formulario
    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( description.trim().length <= 1 ) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo( newTodo );
        reset();

        console.log('nueva tarea')
    }


    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form>
                <div className="d-grid gap-2">
                    <input 
                        onChange={ handleInputChange }
                        value = { description }
                        type='text'
                        name='description'
                        placeholder='Aprender ...'
                        autoComplete='off'
                        className='form-control'
                    />

                    <button
                        onClick={ handleSubmit }
                        type='submit'
                        className='btn btn-outline-primary mt-1 btn-block' >
                            Agregar
                    </button>
                </div>
            </form>            
        </>
    )
}

export default TodoAdd
