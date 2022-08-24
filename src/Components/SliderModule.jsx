import React, { useState, useEffect } from 'react'
import Arrow from './Arrow'
import Card from './Card'
import { Triangle } from 'react-loader-spinner'


export default function Slider() {

    const [heroes, setHeroes] = useState([])
    const [courser, setCourser] = useState(0)

    useEffect(() => {
        fetch('http://localhost:3001/heroes').then(response => response.json()).then(heroes => setHeroes(heroes))
    }, [])

    function handleNext() {
        const current = courser + 1 < heroes.length ? courser + 1 : 0;
        setCourser(current)
    }

    function handlePrev() {
        const current = courser - 1 < 0 ? (heroes.length - 1) : courser - 1;
        setCourser(current)
    }

    return (
        <div className="slide-container">
            <div className="wrapper">
                {!heroes.length ? <Triangle
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                /> :
                    <>
                        <Arrow directions={'prev'} handleClick={handlePrev} />
                        <Card data={heroes[courser]} />
                        <Arrow directions={'next'} handleClick={handleNext} />
                    </>}

            </div>
        </div>
    )
}
