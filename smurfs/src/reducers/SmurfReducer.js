const initialState = {
    smurfs: [{
        name: "Brainey",
        age: 200,
        height: "5cm"
    }], 
    smurfing: false,
    editing: {
        status: false,
        smurf: {}
    }}


export const smurfReducer = (state = initialState, action) => {
    switch(action.type){

        case("SMURFING"):
                return{ ...state, smurfing: true }

        case("REFRESH"):
                return{ ...state, smurfs: [...action.payload], smurfing: false }

        case("ADD_SMURF"):
                return { ...state, smurfs: [...action.payload], smurfing: false }
                
        case("UPDATE_SMURF"):
                return { ...state, smurfs: [...action.payload], smurfing: false,
                    editing: {status: false, smurf: "" }}

        case("EDIT_SMURF"): 
                return { ...state, editing: {status: true,
                    smurf: action.payload.smurf} }

        case("DELETE_SMURF"):
                return { ...state }

        default:
                return { ...state }
    }
}