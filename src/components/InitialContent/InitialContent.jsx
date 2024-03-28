import React from 'react'
import './InitialContent.css'

import Button from '../Button/Button'
const InitialContent = ({content1,content2,content3,addImage,trepo}) => {
    return (
        <div className='main-content'>
            <div className='left-content'>
                <h1 className='left-content-h1'>
                    {content1}
                </h1>
                <p className='left-content-p'>
                    {content2}
                </p>
                <p className='left-content-p'>
                    {content3}
                </p>
                {!trepo&&<Button buttonClass='nav-button' content='Find out More'/>}
            </div>
            <div className="right-content">
                <img src={addImage} alt="Computer" />
            </div>
        </div>
    )
}

export default InitialContent
