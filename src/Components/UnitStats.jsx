import React from 'react'
import Stats from './Stats'

export default function UnitStates({ units, name }) {

    const unitStats = units.map((unit, index) => <Stats index={index} key={index} stat={unit.state} value={unit.value} />)

    return (
        <div className={`clash-card__unit-stats clash-card__unit-stats--${name} clearfix`}>
            {unitStats}
        </div>
    )
}
