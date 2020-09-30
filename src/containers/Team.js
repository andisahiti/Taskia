import React from 'react'
import './Team.css'
import Stats from '../assets/Image 7@2x.png'
import Apple from '../assets/Image 6@2x.png'
import Android from '../assets/Image 9@2x.png'
import { Slide } from 'react-reveal';


const Team = () => {
    return (
        <div className='team'>
            <div className="team__left">
                <Slide left>
                    <div className="team__text">
                        <h1>Seamless Team Workflow & Efficient Task Management</h1>
                        <p>Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.</p>
                    </div>
                </Slide>
                <div className="team__contact">
                    <Slide left>
                        <div className="apple">
                            <img id='apple' src={Apple} alt="apple" />
                        </div>
                        <div className="android">
                            <img id='android' src={Android} alt="android" />
                        </div>
                    </Slide>

                </div>
            </div>
            <Slide right>
                <div className="team__right">
                    <img src={Stats} alt="statistics" />
                </div>
            </Slide>
        </div>
    )
}

export default Team
