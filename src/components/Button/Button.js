import React from 'react'
import './Button.css'


const Button = (props) => {

    const type = props.type;

    return (
        <button className={type}>{props.children}</button>
    )
}

export default Button
