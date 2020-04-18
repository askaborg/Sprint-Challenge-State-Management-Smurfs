import React, { useState, useEffect } from 'react'
import { addSmurf, editSmurf } from '../actions/SmurfActions'
import { connect } from 'react-redux'

const SmurfForm = props => {
    const [newSmurf, setSmurf] = useState({ name: "", age: null, height: "" })
    const [editSmurf, setEdit] = useState(false);

    useEffect(() => {
        setEdit(props.editData.smurf)
    }, [props.editData])

    const handleSubmit = event => {
        event.preventDefault();
        const nowSmurf = props.editData.status ? editSmurf : newSmurf

        if(!nowSmurf.height.includes("cm")) nowSmurf.height += "cm"
        props.editData.status ? props.editSmurf(nowSmurf) : props.addSmurf(nowSmurf)
        setSmurf({ name: "", age: "", height: "" })
        setEdit("")
    }

    const handleChange = e => {
        const update = (setState, state) => {
            setState({...state, [e.target.name]: e.target.value})
        }

        props.editData.status === true ? update(setEdit, editSmurf) :
            update(setSmurf, newSmurf)
    }

    return(
        <form>
            <h2>{Object.keys(editSmurf).length > 1 ? "Edit" : "Add"}</h2>

            <input type="text" name="name" placeholder="Name"
                onChange={handleChange}
                value={editSmurf ? editSmurf.name : newSmurf.name}>
            </input>

            <input type="number" name="age" placeholder="Age"
                onChange={handleChange} 
                value={editSmurf ? Number(editSmurf.age) : newSmurf.age}>
            </input>

            <input type="text" name="height" placeholder="Height"
                onChange={handleChange}
                value={editSmurf ? editSmurf.height : newSmurf.height}>
            </input>
            
            <input type="submit" value="Update"
                onClick={handleSubmit}>
            </input>
        </form>
    )
}

export default connect(state => {
    return {editData: state.editing}
}, {addSmurf, editSmurf}) (SmurfForm)