import React from 'react'
import {FeatureContainer, FeatureButton} from './Feature.style.js'

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Pizza of th Day</h1>
            <p>Truffle alfredo sauce topped with 24 carat</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
