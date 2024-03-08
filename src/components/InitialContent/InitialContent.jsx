import React from 'react'
import './InitialContent.css'

import Button from '../Button/Button'
const InitialContent = ({content1,content2,content3,addImage,trepo}) => {
    return (
        <div className='main-content'>
            <div className='left-content'>
                <h1 className='left-content-h1'>
                    {content1}
                    {/* AI-powered productivity for the supply chain back-office */}
                </h1>
                <p className='left-content-p'>
                    {content2}
                    {/* Increasing the speed, accuracy, and efficiency of Order-to-Cash and Procure-to-Pay processes across supply chain logistics. */}
                </p>
                <p className='left-content-p'>
                    {content3}
                </p>
                {!trepo&&<Button buttonClass='nav-button' content='Find out More'/>}
            </div>
            <div className="right-content">
                {/* <img src={Computer} alt="Computer" /> */}
                <img src={addImage} alt="Computer" />
            </div>
        </div>
    )
}

export default InitialContent
