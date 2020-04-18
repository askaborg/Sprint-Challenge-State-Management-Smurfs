import React, {useEffect} from 'react'
import { connect } from 'react-redux'

import { refreshSmurfs } from '../actions/SmurfActions'
import Smurf from './Smurf'

const Smurfs = (props) => {
    const { smurfing, smurfs} = props.state
    useEffect(() => props.refreshSmurfs(), [])

    return(
        <div>
            {(smurfing) ? <h2>Smurfing...</h2> : 
                smurfs.map(smurf =>
                <Smurf smurf={smurf} />)
            }
        </div>
    )
}

export default connect( state => {return {state}}, {refreshSmurfs}) (Smurfs)