import React from 'react'
import Arrow from './Arrow'
import Card from './Card'

export default function Slider() {
    return (
        <div className="slide-container">
            <div className="wrapper">
                <Arrow />
                <Card />
                <Arrow />
            </div>
        </div>
    )
}
