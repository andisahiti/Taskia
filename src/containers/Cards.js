import React from 'react'
import Card from '../components/Card/Card'
import './Cards.css'
import TeaImg from '../assets/day80-tea.png'
import WalletImg from '../assets/day78-wallet.png'
import KnifeImg from '../assets/day77-pocket-knief.png'
import { Roll } from 'react-reveal';



const Cards = () => {
    return (
        <div className="cards">
            <Roll left >
                <h1>Featured Service that We Provide</h1>
            </Roll>
            <div className="cards__items">
                <Roll left>
                    <Card
                        hColor='#ffffff'
                        img={TeaImg}
                        hTag='Keep tasks in one place'
                        pTag='Save time, avoid losing work and information, delegate, and track tasks to stay on schedule'
                        bgColor='#525FFB'
                        marginTop='0'
                        className='cards__item1'
                        pColor='#ffffff' />
                </Roll>
                <Roll left>
                    <Card
                        hColor='#1E1C24'
                        img={WalletImg}
                        hTag='Keep tasks in one place'
                        pTag='Save time, avoid losing work and information, delegate, and track tasks to stay on schedule'
                        bgColor='#E9F0FF'
                        marginTop='65px'
                        className='cards__item2'
                        pColor='#1E1C24' />
                </Roll>
                <Roll left >
                    <Card
                        hColor='#1E1C24'
                        img={KnifeImg}
                        hTag='Keep tasks in one place'
                        pTag='Save time, avoid losing work and information, delegate, and track tasks to stay on schedule'
                        bgColor='#FFE7AA'
                        marginTop='25px'
                        className='cards__item3'
                        pColor='#1E1C24' />
                </Roll>
            </div>
        </div>
    )
}

export default Cards
