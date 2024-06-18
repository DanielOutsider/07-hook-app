export const todoReducer = ( state = [], action ) => {

    switch ( action.type ) {
        case 'add':
            return [ ...state, action.payload ]
            break;
        case 'delete':
            return state.filter( todo => todo.id !== action.payload );
            break;
        case 'toggle':
            return state.map( todo => 
                ( todo.id === action.payload )
                    ? { ...todo, done: !todo.done }
                    : todo
            )
            break;
        case 'toggle-0':
            return state.map( todo => {

                if ( todo.id === action.payload ) {
                    // cambia el done a true o false
                    // si el id coincide con el enviado
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    // si no lo ubica retorna el todo completo
                    return todo
                } 
            });
            break;
        default:
            return state;
    }
}

