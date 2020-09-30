import React from 'react'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import Image from '../assets/Image 5@2x.png'
import './Main.css'
import { Fade } from 'react-reveal';

const Main = () => {
    return (
        <Fade bottom>
            <div className="main">
                <div className="main__left">
                    <div className="main__text">
                        <h1>Task management and lists Tool</h1>
                        <p>We believe that designing products and services in close
                        partnership with our clients is the only way to have a real
impact on their business.</p>
                    </div>
                    <div className="main__contact">
                        <Input />
                        <div class="divider" />
                        <Button type="Fill">Try it free</Button>
                    </div>
                </div>
                <div className="main__right">
                    <img src={Image} alt="people img" />
                </div>

            </div>
        </Fade>
    )
}

export default Main
