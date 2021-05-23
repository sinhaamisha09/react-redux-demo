import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'

function HooksIceCreamContainer() {
    const numOfIceCreams =  useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch =  useDispatch()
    return (
        <div>
            <h2>Num of Ice-cream - { numOfIceCreams }</h2>
            <button onClick={() => dispatch(buyIceCream())}> BUY ICE-CREAM</button>
        </div>
    )
}

export default HooksIceCreamContainer
