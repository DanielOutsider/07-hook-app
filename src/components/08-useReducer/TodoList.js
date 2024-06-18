import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ( { todos, handleDelete, handleToggle } ) => {
  return (

    <ul className='list-group list-group-flush'>
        {
            // TodoListItem, index, handleDelete, handleToggle
            todos.map( ( todo, i) => (
                <TodoListItem 
                    key={todo.id} // Añade la key aquí
                    todo={ todo }
                    index={ i }
                    handleDelete={ handleDelete }
                    handleToggle={ handleToggle }
                />
            ))
        }
    </ul>

  )
}

export default TodoList
