import React from 'react'
import './Service.css'
import Girl1 from '../assets/Group 228.png'
import Girl2 from '../assets/Group 230.png'
import { Zoom } from 'react-reveal';
import Footer from '../components/Footer/Footer'
const Service = () => {
    return (
        <div className='service'>
            <Zoom clear>
                <h1>Trust us and feel free to try our service</h1>
                <h1 id='number'>100 000</h1>
            </Zoom>
            <Zoom left>
                <img id='girl1' src={Girl1} alt="girl" />
                <img id='girl2' src={Girl1} alt="girl" />
                <img id='girl4' src={Girl2} alt="girl" />

            </Zoom>
            <Zoom right>
                <img id='girl3' src={Girl1} alt="girl" />
                <img id='girl5' src={Girl2} alt="girl" />
                <img id='girl6' src={Girl2} alt="girl" />
            </Zoom>
            <Footer />
        </div>
    )
}

export default Service
