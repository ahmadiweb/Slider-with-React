import React from 'react'

export default function Stats({ stat, value, index }) {
    return (
        <div className={index === 2 ? `one-third no-border` : `one-third`}>
            <div className="stat">{stat}</div>
            <div className="stat-value">{value}</div>
        </div>
    )
}
