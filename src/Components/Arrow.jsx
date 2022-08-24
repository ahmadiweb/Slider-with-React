import React from 'react'

export default function Arrow({ directions, handleClick }) {
    return (
        <div className="arrow-wrapper" onClick={handleClick}>
            <div className="round" >
                <div id="cta">
                    <span className={`arrow ${directions}`}></span>
                </div>
            </div>
        </div>
    )
}
