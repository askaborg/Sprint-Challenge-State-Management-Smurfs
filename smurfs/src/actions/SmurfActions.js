import axios from "axios"

export const editSmurf = smurf => dispatch => {
    axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => {dispatch({ type: "UPDATE_SMURF", payload: res.data })})
    .catch(err => console.log(err.message))
}

export const deleteSmurf = smurf => dispatch => {
    axios.delete(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => {dispatch({ type: 'UPDATE_SMURF', payload: res.data })})
    .catch(err => console.log(err.message))
}

export const refreshSmurfs = (type) => dispatch => {
    dispatch({type: "LOADING"});
    axios.get(`http://localhost:3333/smurfs`)
         .then(res => {dispatch({ type: "REFRESH", payload: res.data })})
         .catch(err => console.log(err.message))
}

export const addSmurf = (newSmurf) => dispatch => {
    console.log(newSmurf);
    dispatch({type: "LOADING"})
    axios.post(`http://localhost:3333/smurfs`, newSmurf)
         .then(res => {dispatch({ type: "ADD_SMURF", payload: res.data })})
         .catch(err => console.log(err.message))
}