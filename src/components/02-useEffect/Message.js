import React, { useEffect } from 'react'

const Message = () => {

    useEffect(() => {

        console.log('componente mensaje montado');

        const mouseMove = (e) => {
            console.log('   :D  ');
        }

        window.addEventListener('mousemove', mouseMove);
        
        return () => {
            console.log('componente mensaje desmontado');

            window.removeEventListener('mousemove', mouseMove)
        };
    }, [])

    return (
        <div>
        <h3>Este es un Mensaje</h3>
        </div>
    )
}

export default Message
