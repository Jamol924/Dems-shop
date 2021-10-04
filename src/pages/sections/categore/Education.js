import React from 'react'
import AboutUs from '../home/AboutUs'
import InfoUs from '../home/InfoUs'
import Intro from '../home/Intro'
import CardEducation from './Education/CardEducation'

function Education() {
    return (
        <div>
             <Intro />
            <AboutUs />
            <CardEducation />
            <InfoUs />
        </div>
    )
}

export default Education