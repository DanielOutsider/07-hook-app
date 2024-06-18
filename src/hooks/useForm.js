import { useState } from "react"

const useForm = ( initialState = {} ) => {
  
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    // asigna los cambios al objeto
    const handleInputChange = ({ target }) => {

        console.log(target.name);
        setValues({
            ...values,
            [ target.name ]: target.value
        })
    }

    return [ values, handleInputChange, reset ];
}

export default useForm
