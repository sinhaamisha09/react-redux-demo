import React, {useState} from 'react'
import { buyIceCream } from '../redux'
import  { connect } from 'react-redux'

function IceCreamContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of Ice-creams - { props.numOfIceCreams } </h2>
            <input type='text' value={number} 
                onChange={e => setNumber(e.target.value) } />
            <button onClick={() => props.buyIceCream(number) }>BUY { number } ICE-CREAM</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => { //dispatches action creators from redux
    return {
        buyIceCream: (number) => dispatch(buyIceCream(number))
    }
}

export default connect( 
    mapStateToProps, 
    mapDispatchToProps
    )
    (IceCreamContainer)
