import React from 'react'
import Button from '../Button/Button'
import './Header.css'
const Header = () => {
    return (
        <header className='header'>
            <h1>Taskia</h1>
            <Button type='noFill'>Try free</Button>
        </header>
    )
}

export default Header
