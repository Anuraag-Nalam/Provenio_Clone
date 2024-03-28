import React from 'react'
import './Running.css'
import Rect from '../../assets/personImage_files/Rectangle-24-1.webp'
import Button from '../Button/Button'
const Running = () => {
    return (<>
        <div className='main-running'>
            <div className='flex-box'>
                <div className='left-div-running'>
                    <h1 className='left-content-running'>
                        Get up and running in weeks, not months.
                    </h1>
                    <p className='running-p'>We know it’s important to create value, quickly. Achieve rapid time-to-value, and deliver in year savings.</p>
                </div>
                <div className="right-div-running">
                    <img src={Rect} alt="" />
                </div>
            </div>
            <div className='button-running'>
                <Button className='button_Component' buttonClass='nav-button' content='Book a demo' />
            </div>
        </div>

    </>
    )
}

export default Running
