import React from 'react'
import Button from '../components/Button/Button'
import './Tablet.css'
import Image from '../assets/Image 8@2x.png'
import { Slide } from 'react-reveal';

const Tablet = () => {
    return (
        <div className='tablet'>
            <Slide left>
                <div className="tablet__left">
                    <img src={Image} alt="tablet" />
                </div>
            </Slide>
            <div className="tablet__right">
                <Slide right>
                    <div className="tablet__text">
                        <h1>Why do you need
task management software?</h1>
                        <p>Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.</p>
                        <div className="tablet__contact">
                            <Button type="Fill">Learn more</Button>
                        </div>
                    </div>
                </Slide>

            </div>
        </div>
    )
}

export default Tablet
