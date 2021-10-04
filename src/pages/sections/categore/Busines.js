import React from 'react'
import AboutUs from '../home/AboutUs'
import InfoUs from '../home/InfoUs'
import Intro from '../home/Intro'
import CardBusines from './BusinesCard/Card'

function Busines() {
    return (
        <div>
            <Intro />
            <AboutUs />
            <CardBusines />
            <InfoUs />
        </div>
    )
}

export default Busines