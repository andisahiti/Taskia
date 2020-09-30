import React from 'react'
import './Card.css'
const Card = (props) => {
    return (
        <div style={{
            backgroundColor: props.bgColor,
            marginTop: props.marginTop
        }} className="card">

            <img src={props.img} alt="Card img" />

            <h3 style={{
                color: props.hColor
            }}>{props.hTag}</h3>
            <p style={{
                color: props.pColor,
                fontWeight: '600'
            }}>{props.pTag}</p>
        </div>
    )
}

export default Card
