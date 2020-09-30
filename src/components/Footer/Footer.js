import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './Footer.css'
import { Flip } from 'react-reveal';

const Footer = () => {
    return (
        <footer className="footer">
            <Flip left>
                <div className="footer__text">
                    <h1>Get better work done</h1>
                    <p>See why millions of people across 195 countries use Dash.</p>
                </div>
                <div className="footer__contact">
                    <Input />
                    <div class="divider" />
                    <Button type="Fill">Try it free</Button>
                </div>
            </Flip>
        </footer>
    )
}

export default Footer
