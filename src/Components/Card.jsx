import React from 'react'
import CardImage from './CardImage'
import CardItem from './CardItem'
import UnitStats from './UnitStats'

export default function Card({ data }) {
    return (
        <div className={`clash-card ${data.name}`}>
            <CardImage img={data.img} name={data.name} />
            <CardItem type={`clash-card__level clash-card__level--${data.name}`}>{data.level}</CardItem>
            <CardItem type='clash-card__unit-name'>{data.name}</CardItem>
            <CardItem type='clash-card__unit-description'>
                {data.description}
            </CardItem>
            <UnitStats units={data.units} name={data.name} />



        </div>
    )
}
