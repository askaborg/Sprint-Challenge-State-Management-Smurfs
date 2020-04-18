import React from 'react'
import { useDispatch } from 'react-redux'

import { deleteSmurf } from '../actions/SmurfActions'

const Smurf = (props) => {
    const { smurf } = props
    const { name, age, height } = smurf
    const dispatch = useDispatch()

    return(
        <div>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Height: {height}</p>
            <button onClick={() => dispatch({ type: "EDIT_SMURF",
                payload: {smurf: smurf} })}>
                Edit
            </button>
            <button onClick={() => dispatch(deleteSmurf(smurf))}>
                Delete
            </button>
        </div>
    )
}

export default Smurf