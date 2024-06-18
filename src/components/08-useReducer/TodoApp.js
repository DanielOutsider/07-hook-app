import React, { useEffect, useReducer } from 'react'
import './styles.css';
import { todoReducer } from './todoReducer';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const init = () =>{ 
    return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    // observa si hay cambios en todos para efectuar la operativa
    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = ( todoId ) => {

        // creo la accion
        const action = {
            type: 'delete',
            payload: todoId
        };

        // despacho la accion y 
        // el useeffect lee que cambio y lo asigna al local storage
        dispatch( action );
    }

    const handleToggle = ( todoId ) => {

        // creo la accion
        const action = {
            type: 'toggle',
            payload: todoId
        };

        // despacho la accion y 
        // el useeffect lee que cambio y lo asigna al local storage
        dispatch( action );
    }

    const handleAddTodo = ( newTodo ) => {
        const action = {
            type: 'add',
            payload: newTodo
        };

        dispatch( action );
    }

    return (
        <div>
            <h1>TodoApp ({ todos.length })</h1>
            <hr />

            <div className='row'>
                <div className='col-7'>

                    {/* TodoList, todos, handleDelete, handleToggle */}
                    <TodoList 
                        todos={ todos }
                        handleDelete={ handleDelete } 
                        handleToggle={ handleToggle } 
                    />

                </div>
                <div className='col-5'>
                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />
                </div>
            </div>
        </div>
    )
}

export default TodoApp
